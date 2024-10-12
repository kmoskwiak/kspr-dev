import { NotFoundError } from "@kspr-dev/common/errors";
import express from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import { renderToPipeableStream } from "react-dom/server";
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom/server";
import { globalStyles } from "./shell/global.css";
import { Router } from "./shell/routes/Router";

process.on("unhandledRejection", function (err, promise) {
  console.error(
    "Unhandled rejection (promise: ",
    promise,
    ", reason: ",
    err,
    ")."
  );
});

const pageRaw = fs.readFileSync(
  path.resolve(__dirname, "../../dist/index.html"),
  {
    encoding: "utf-8",
  }
);

const publicFiles = fs.readdirSync(path.resolve(__dirname, "../../dist/public"));

const parts = pageRaw.split("<!-- break here -->");
const app = express();

publicFiles.forEach((file) => {
  app.use(`/${file}`, express.static(path.resolve(__dirname, `../../dist/public/${file}`)));
});

app.use("/static", express.static(path.resolve(__dirname, "../../dist")));

app.use(morgan("combined"));

app.use("/", async (req, res, next) => {

  let didError = false;
  let responseStatusCode = 200;

  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <Router />
    </StaticRouter>,
    {
      onAllReady() {
        res.statusCode = responseStatusCode;
        res.setHeader("Content-type", "text/html");
        res.write(parts[0]);
        const helmet = Helmet.renderStatic();
        res.write(helmet.title.toString());
        res.write(helmet.meta.toString());

        res.write(`
          <style>
            ${globalStyles.styles}
          </style>
        `);

        res.write(parts[1]);

        stream.pipe(res);

        res.write(parts[2]);
        res.write(parts[3]);
      },
      onShellError() {
        res.statusCode = 500;
        res.send(`<h1>An error occurred</h1>`);
      },
      onError(err) {
        didError = true;
        responseStatusCode = 500;

        if (err.name === NotFoundError.name) {
          responseStatusCode = 404;
          return;
        }

        console.error('Server onError', err);
      },
    }
  );
});

app.use((_req, res) => {
  res.status(404).end();
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`${new Date()} Server listening on port 3000`);
});

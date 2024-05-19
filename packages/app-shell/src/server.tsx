import express from "express";
import path from "path";
import fs from "fs";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import morgan from "morgan";
import { Router } from "./shell/routes/Router";
import { renderToPipeableStream } from "react-dom/server";

process.on("unhandledRejection", function (err, promise) {
  console.error(
    "Unhandled rejection (promise: ",
    promise,
    ", reason: ",
    err,
    ")."
  );
});

console.log(__dirname);
console.log(path.resolve(__dirname, "../../dist/index.html"));



const pageRaw = fs.readFileSync(
  path.resolve(__dirname, "../../dist/index.html"),
  {
    encoding: "utf-8",
  }
);

const parts = pageRaw.split("<!-- break here -->");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "../../dist")));
app.use(morgan("combined"));

app.use("/", async (req, res, next) => {

  if (!["/", "/articles", "/projects", "/loading"].includes(req.path)) {
    return next();
  }



  let didError = false;

  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
        <Router />
    </StaticRouter>,
    {
      onAllReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        res.write(parts[0]);
        const helmet = Helmet.renderStatic();
        res.write(helmet.title.toString());
        res.write(helmet.meta.toString());
        res.write
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
        console.error(err);
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

const express = require('express');
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

app.use(express.static(path.resolve(__dirname, "../../dist")));

app.listen(8000, "0.0.0.0", () => {
    console.log(`${new Date()} Server listening on port 8000`);
});
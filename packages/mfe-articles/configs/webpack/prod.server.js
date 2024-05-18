// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const moduleFederationConfig = require('./moduleFederation');

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./src/entry.server.tsx",
  output: {
    filename: "bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist/server"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    ...moduleFederationConfig.server,
  ],
});

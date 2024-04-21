// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const moduleFederationConfig = require('./moduleFederation');

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist/client"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    ...moduleFederationConfig.client,
  ],
});

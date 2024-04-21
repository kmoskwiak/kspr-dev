// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const moduleFederationConfig = require('./moduleFederation');
const { resolve } = require("path");

module.exports = merge(commonConfig, {
  entry: "./src/entry.tsx",
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3013
  },
  devtool: "cheap-module-source-map",
  name: "client",
  plugins: [
    ...moduleFederationConfig.client,
  ],
});

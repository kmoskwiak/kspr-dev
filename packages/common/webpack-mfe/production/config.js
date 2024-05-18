const { merge } = require("webpack-merge");
const { resolve } = require("path");
const moduleFederationConfig = require('./moduleFederation');

const commonConfig = require("./common");

module.exports = ({
    entry,
    context,
    /**
     * @property {string} type - The type of the configuration. Either "client" or "server".
     */
    type
}) => merge(commonConfig, {
  mode: "production",
  entry: "./src/entry.tsx",
  output: {
    filename: "bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist/client", type),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    ...moduleFederationConfig[type],
  ],
});

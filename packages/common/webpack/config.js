const { merge } = require("webpack-merge");
const { resolve } = require("path");
const moduleFederationConfig = require('./moduleFederation');
const commonConfig = require("./common");

module.exports = ({
    mode,
    context,
    /**
     * @property {string} envType - The type of the configuration. Either "client" or "server".
     */
    envType,
    devPort,
    moduleName,
    moduleExposes,
}) => merge(commonConfig, {
  mode,
  context,
  name: envType,
  entry: `./src/entry.${envType}.tsx`,

  /**
   * Server specific configurations
   */
  ...(envType === "server" && {
    target: "node",
  }),

  /**
   * Client specific configurations
   */
  ...(envType === "client" && {
  }),

  /**
   * Development specific configurations
   */
  ...(mode === "development" && {
    devServer: {
      hot: true,
      historyApiFallback: true,
      port: devPort,
    },
    devtool: "cheap-module-source-map",
  }),

   /**
   * Production specific configurations
   */
  ...(mode === "production" && {
    devtool: "source-map",
    output: {
      filename: "bundle.[contenthash].min.js",
      path: resolve(__dirname, "../../dist/", envType),
      publicPath: "/",
    },
  }),
  plugins: [
    ...moduleFederationConfig({
        name: moduleName,
        exposes: moduleExposes,
      })[envType],
  ],
});

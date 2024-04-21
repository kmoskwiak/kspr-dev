// production config
const { merge } = require("webpack-merge");
const moduleFederationConfig = require('./moduleFederation');
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./src/entry.server.tsx",
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3014
  },
  devtool: "cheap-module-source-map",
  target: 'node',
  name: "server",
  plugins: [
    ...moduleFederationConfig.server,
  ],
});

// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require("./common");
const dependencies = require('@kspr-dev/dependencies');
const { UniversalFederationPlugin } = require("@module-federation/node");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = merge(commonConfig, {
  entry: "./index.server.ts",
  mode: "production",
  target: 'node',
  output: {
    filename: "js/server.js",
    path: resolve(__dirname, "../../dist-server"),
  },
  devtool: "source-map",
  externals: {},
  plugins: [
    new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, '../../src/index.html.ejs'),
            to: './js'
          },
        ]
    }),
    new UniversalFederationPlugin({
      name: "kspr_dev_shell",
      isServer: true,
      remotes: {
        kspr_dev_articles: "kspr_dev_articles@http://localhost:3014/remoteEntry.js",
      },
      shared: {
        react: {singleton: true, requiredVersion: dependencies.dependencies['react']}, 
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies.dependencies['react-dom']
        },
        "react-dom/client": {
          singleton: true,
          requiredVersion: dependencies.dependencies['react-dom']
        },
        "react-router": {singleton: true, requiredVersion: dependencies.dependencies['react-router']},
        "react-router-dom": {singleton: true, requiredVersion: dependencies.dependencies['react-router-dom']}
      }
    }),
    new ExternalTemplateRemotesPlugin(),
  ]
});

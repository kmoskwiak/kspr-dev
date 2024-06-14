// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require("./common");
const common = require('@kspr-dev/common/dependencies');
const { UniversalFederationPlugin } = require("@module-federation/node");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

const buildTimestamp = new Date().getTime().toString(32);

module.exports = merge(commonConfig, {
  entry: "./index.server.ts",
  mode: "production",
  target: 'node',
  output: {
    filename: "js/server.js",
    path: resolve(__dirname, "../../dist-server"),
  },
  devtool: "cheap-module-source-map",
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
        kspr_dev_articles: "kspr_dev_articles@https://mfs.kspr.dev/kspr_dev_articles/server/remoteEntry.js?v=" + buildTimestamp,
        kspr_dev_header: "kspr_dev_header@https://mfs.kspr.dev/kspr_dev_header/server/remoteEntry.js?v=" + buildTimestamp,
        kspr_dev_projects: "kspr_dev_projects@https://mfs.kspr.dev/kspr_dev_projects/server/remoteEntry.js?v=" + buildTimestamp,
        kspr_dev_footer: "kspr_dev_footer@https://mfs.kspr.dev/kspr_dev_footer/server/remoteEntry.js?v=" + buildTimestamp,
      },
      shared: {
        react: {singleton: true, requiredVersion: common.dependencies['react']}, 
        "react-dom": {
          singleton: true,
          requiredVersion: common.dependencies['react-dom']
        },
        "react-dom/client": {
          singleton: true,
          requiredVersion: common.dependencies['react-dom']
        },
        "react-router": {singleton: true, requiredVersion: common.dependencies['react-router']},
        "react-router-dom": {singleton: true, requiredVersion: common.dependencies['react-router-dom']}
      }
    }),
    new ExternalTemplateRemotesPlugin(),
  ]
});

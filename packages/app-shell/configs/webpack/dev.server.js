// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require("./common");
const common = require('@kspr-dev/common/dependencies');
const { UniversalFederationPlugin } = require("@module-federation/node");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = merge(commonConfig, {
  entry: "./index.server.ts",
  mode: "development",
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
        kspr_dev_articles: "kspr_dev_articles@http://localhost:3014/remoteEntry.js",
        kspr_dev_header: "kspr_dev_header@http://localhost:3016/remoteEntry.js",
        kspr_dev_projects: "kspr_dev_projects@http://localhost:3018/remoteEntry.js",
        kspr_dev_footer: "kspr_dev_footer@http://localhost:3020/remoteEntry.js",
        kspr_dev_rese: "kspr_dev_rese@http://localhost:3022/remoteEntry.js",
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
        "react-router-dom": {singleton: true, requiredVersion: common.dependencies['react-router-dom']},
        "@kspr-dev/common": { singleton: true, requiredVersion: common.dependencies['@kspr-dev/common']},
        "@emotion/react": { singleton: true, requiredVersion: common.dependencies['@emotion/react']}
      }
    }),
    new ExternalTemplateRemotesPlugin(),
  ]
});

// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require('@kspr-dev/common/dependencies');
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const CopyPlugin = require('copy-webpack-plugin');


const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/static/",
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../../src/public/**/*'),
          to: './'
        },
      ]
  }),
    new ModuleFederationPlugin({
      name: "kspr_dev_shell",
      remotes: {
        kspr_dev_articles: "kspr_dev_articles@http://localhost:8000/kspr_dev_articles/client/remoteEntry.js",
        kspr_dev_header: "kspr_dev_header@http://localhost:8000/kspr_dev_header/client/remoteEntry.js",
        kspr_dev_projects: "kspr_dev_projects@http://localhost:8000/kspr_dev_projects/client/remoteEntry.js",
        kspr_dev_footer: "kspr_dev_footer@http://localhost:8000/kspr_dev_footer/client/remoteEntry.js"
      },
      shared: {
        react: {
          singleton: true, 
          requiredVersion: common.dependencies['react']
        }, 
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
    new HtmlWebpackPlugin({ 
      template: resolve(__dirname, "../../src/index.html.ejs"),
      removeComments: false,
      minify: false
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
});

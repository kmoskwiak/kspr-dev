// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dependencies = require('@kspr-dev/dependencies');
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

console.log(dependencies);

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/static/",
  },
  devtool: "source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "kspr_dev_shell",
      remotes: {
        //kspr_dev_articles: "kspr_dev_articles@[kspr_dev_articlesUrl]/remoteEntry.js",
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
    new HtmlWebpackPlugin({ 
      template: resolve(__dirname, "../../src/index.html.ejs"),
      removeComments: false,
      minify: false
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
});

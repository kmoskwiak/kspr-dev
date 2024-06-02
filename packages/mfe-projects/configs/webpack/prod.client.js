const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')


module.exports = webpackConfig({
  mode: "production",
  context: resolve(__dirname, "../../"),
  envType: "client",
  moduleName: "kspr_dev_projects",
  moduleExposes: {
    './CurrentlyWorkingOn': './src/CurrentlyWorkingOn',
    './Projects': './src/Projects',
  },
});
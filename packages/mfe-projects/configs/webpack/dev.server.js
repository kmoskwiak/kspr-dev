
const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')

module.exports = webpackConfig({
    mode: "development",
    context: resolve(__dirname, "../../"),
    envType: "server",
    devPort: 3018,
    moduleName: "kspr_dev_projects",
    moduleExposes: {
      './CurrentlyWorkingOn': './src/CurrentlyWorkingOn',
      './Projects': './src/Projects',
    },
});

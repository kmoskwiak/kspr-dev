const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')


module.exports = webpackConfig({
  mode: "production",
  context: resolve(__dirname, "../../"),
  envType: "server",
  moduleName: "kspr_dev_header",
  moduleExposes: {
    './Header': './src/Header',
    './ReSeHeader': './src/ReSeHeader',
  },
});

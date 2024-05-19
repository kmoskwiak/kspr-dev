const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')


module.exports = webpackConfig({
    mode: "development",
    context: resolve(__dirname, "../../"),
    envType: "client",
    devPort: 3015,
    moduleName: "kspr_dev_header",
    moduleExposes: {
      './Header': './src/Header',
    },
});

const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')

module.exports = webpackConfig({
    mode: "development",
    context: resolve(__dirname, "../../"),
    envType: "server",
    devPort: 3014,
    moduleName: "kspr_dev_articles",
    moduleExposes: {
      './LastArticle': './src/LastArticle',
      './Articles': './src/Articles',
    },
});


const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')

module.exports = webpackConfig({
    mode: "development",
    context: resolve(__dirname, "../../"),
    envType: "server",
    devPort: 3022,
    moduleName: "kspr_dev_rese",
    moduleExposes: {
      './ResearchTopics': './src/ResearchTopics',
    },
});

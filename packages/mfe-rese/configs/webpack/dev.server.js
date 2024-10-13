const { resolve } = require("path");
const webpackConfig = require('@kspr-dev/common/webpack/config')


export default  webpackConfig({
    mode: "development",
    context: resolve(import.meta.dirname, "../../"),
    envType: "server",
    devPort: 3022,
    moduleName: "kspr_dev_rese",
    moduleExposes: {
      './ResearchTopics': './src/ResearchTopics',
    },
});

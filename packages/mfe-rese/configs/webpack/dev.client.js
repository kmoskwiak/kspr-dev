import webpackConfig from '@kspr-dev/common/webpack/config';
import { resolve } from "path";

export default  webpackConfig({
    mode: "development",
    context: resolve(import.meta.dirname, "../../"),
    envType: "client",
    devPort: 3021,
    moduleName: "kspr_dev_rese",
    moduleExposes: {
      './ResearchTopics': './src/ResearchTopics',
    },
});
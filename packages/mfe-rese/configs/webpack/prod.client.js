import webpackConfig from '@kspr-dev/common/webpack/config';
import { resolve } from "path";

export default  webpackConfig({
  mode: "production",
  context: resolve(import.meta.dirname, "../../"),
  envType: "client",
  moduleName: "kspr_dev_rese",
  moduleExposes: {
    './ResearchTopics': './src/ResearchTopics',
  },
});
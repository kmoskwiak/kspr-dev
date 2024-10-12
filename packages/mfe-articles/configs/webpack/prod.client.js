import webpackConfig from '@kspr-dev/common/webpack/config';
import { resolve } from "path";


export default webpackConfig({
  mode: "production",
  context: resolve(import.meta.dirname, "../../"),
  envType: "client",
  moduleName: "kspr_dev_articles",
  moduleExposes: {
    './LastArticle': './src/LastArticle',
    './Articles': './src/Articles',
    './SingleArticle': './src/SingleArticle',
  },
});
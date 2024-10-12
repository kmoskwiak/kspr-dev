import webpackConfig from '@kspr-dev/common/webpack/config';
import { resolve } from "path";

export default webpackConfig({
    mode: "development",
    context: resolve(import.meta.dirname, "../../"),
    envType: "client",
    devPort: 3013,
    moduleName: "kspr_dev_articles",
    moduleExposes: {
      './LastArticle': './src/LastArticle',
      './Articles': './src/Articles',
      './SingleArticle': './src/SingleArticle',
    },
});
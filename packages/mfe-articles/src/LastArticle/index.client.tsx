import { BrowserDataProvider } from "@kspr-dev/use-sse";
import { Articles as ArticlesComponent } from "./LastArticle";

export default function Articles() {
  return (
    <BrowserDataProvider>
      <ArticlesComponent />
    </BrowserDataProvider>
  );
}

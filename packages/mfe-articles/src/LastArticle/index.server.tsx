import { ServerDataProvider } from "@kspr-dev/use-sse";
import { Articles as ArticleList } from "./LastArticle";

export default function Articles() {
  return (
    <ServerDataProvider>
      <ArticleList />
    </ServerDataProvider>
  );
}

import { ErrorBoundary } from "@kspr-dev/common/errors";
import { ServerDataProvider } from "@kspr-dev/use-sse";
import { SingleArticle as SingleArticleComponent } from "./SingleArticle";

export default function SingleArticle() {
  return (
    <ServerDataProvider>
      <ErrorBoundary>
        <SingleArticleComponent />
      </ErrorBoundary>
    </ServerDataProvider>
  );
}

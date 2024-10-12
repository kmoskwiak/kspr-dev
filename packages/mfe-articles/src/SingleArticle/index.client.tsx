import { ErrorBoundary } from "@kspr-dev/common/errors";
import { BrowserDataProvider } from "@kspr-dev/use-sse";
import { SingleArticle as SingleArticleComponent } from "./SingleArticle";

export default function SingleArticle() {
  return (
    <BrowserDataProvider>
      <ErrorBoundary>
        <SingleArticleComponent />
      </ErrorBoundary>
    </BrowserDataProvider>
  );
}

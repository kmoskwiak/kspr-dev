import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { Container } from "@kspr-dev/common/components/Container";
import { Header } from "@kspr-dev/common/components/Header";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";

const API = "https://cms.kspr.dev/items/LastArticles";

type ArticleProps = {
  "title": string,
  "description": string,
  "url": string,
  "image": string,
  "publicationDate": string
}

type LastArticleResponse = {
  data: { 
    items: ArticleProps[]
  }
}

export const Articles = () => {

  const [data] = useSSE<ArticleProps[]>(() => {
    return axios.get<LastArticleResponse>(API).then((res) => res.data?.data?.items || []);
  }, []);

  return (
    <>
      <Container marginTop="3rem">
        <Header font="sans-serif">
          My last article
        </Header>
      </Container>
      <Container marginTop="1rem">
        {data?.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            imageSrc={article.image}
            href={article.url}
            description={article.description}
          />
        ))}
      </Container>
    </>
  );
};

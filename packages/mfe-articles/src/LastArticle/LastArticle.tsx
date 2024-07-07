import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { Container } from "@kspr-dev/common/components/Container";
import { Header } from "@kspr-dev/common/components/Header";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";

const API = "https://dsa.kspr.dev/list/lastArticle";

type ArticleProps = {
  "title": string,
  "description": string,
  "url": string,
  "image": string,
  "publicationDate": string
}

export const Articles = () => {

  const [data] = useSSE<ArticleProps[]>(() => {
    return axios.get(API).then((res) => res.data);
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

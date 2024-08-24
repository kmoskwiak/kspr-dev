import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { Container } from "@kspr-dev/common/components/Container";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";
import { style } from "./Articles.css";

const API = "https://cms.kspr.dev/items/Articles";

type ArticleItem = {
  title: string,
  description: string,
  url: string,
  image: string,
  publicationDate: string,
  website: string
}

type ArticleResponse = {
  data: { items: ArticleItem[] }
}

export const Articles = () => {

  const [articles] = useSSE<ArticleItem[]>(() => {
    return axios
      .get<ArticleResponse>(API)
      .then((res) => res.data?.data?.items?.map(articleItem => ({
        title: articleItem.title,
        description: articleItem.description,
        url: articleItem.url,
        image: articleItem.image,
        publicationDate: articleItem.publicationDate,
        website: articleItem.website
      })) || []);
  }, []);



  return (
    <div css={style}>
      <Container marginTop="6rem">
        {
          articles && articles.map(article => (
            <ArticleCard
              compact
              key={article.title}
              title={article.title}
              description={article.description}
              imageSrc={article.image}
              href={article.url}
              website={article.website}
              date={article.publicationDate}
            />
          ))
        }
      </Container>
    </div>
  );
};

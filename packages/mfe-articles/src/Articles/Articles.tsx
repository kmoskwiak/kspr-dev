import { createDirectus, readItems, rest } from '@directus/sdk';
import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { Container } from "@kspr-dev/common/components/Container";
import { useSSE } from "@kspr-dev/use-sse";
import { style } from "./Articles.css";

const client = createDirectus('https://cms.kspr.dev').with(rest());

type ArticleItem = {
  slug: string;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  description: string | null;
  category: "string" | null;
  body: string | null;
  tags: number[] | null;
  cover: string | null;
  publicationDate: string,
  website: string
  canonicalUrl: string | null;
}

const getAssetUrl = (id: string) => `https://cms.kspr.dev/assets/${id}`;

export const Articles = () => {

  const [articles] = useSSE<ArticleItem[]>(() => {
    return client.request<ArticleItem[]>(readItems('Post', {
      sort: ['-publicationDate']
    }));
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
              imageSrc={getAssetUrl(article.cover)}
              href={article.canonicalUrl ?? `/${article.slug}`}
              website={article.website}
              date={article.publicationDate}
            />
          ))
        }
      </Container>
    </div>
  );
};

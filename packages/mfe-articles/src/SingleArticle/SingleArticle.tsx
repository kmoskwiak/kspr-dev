import { createDirectus, readItem, rest } from '@directus/sdk';
import { ArticleBody } from "@kspr-dev/common/components/ArticleBody";
import { Container } from "@kspr-dev/common/components/Container";
import { Header } from "@kspr-dev/common/components/Header";
import { NotFoundError } from "@kspr-dev/common/errors";
import { useSSE } from "@kspr-dev/use-sse";
import { useParams } from "react-router-dom";
import { styles } from './SingleArticle.css';


const client = createDirectus('https://cms.kspr.dev').with(rest());
const getAssetUrl = (id: string) => `https://cms.kspr.dev/assets/${id}`;


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
  body?: string | null;
  bodyMd?: string | null;
  tags: number[] | null;
  cover: string | null;
  publicationDate: string,
  website: string
  canonicalUrl: string | null;
}


export const SingleArticle = () => {
  const { slug } = useParams<{ slug: string }>();

  const [data] = useSSE<ArticleItem>(() => {
    return client.request<ArticleItem>(readItem('Post', encodeURIComponent(slug)));
  }, []);

  if (!data) {
    throw new NotFoundError('Article not found');
  }

  return (
    <Container marginTop="1rem">
      <div css={styles}>
        <Header font="sans-serif" el='h1'>
          {data?.title}
        </Header>
        <ArticleBody body={data?.body} bodyMd={data.bodyMd} />
      </div>
    </Container >
  );
};

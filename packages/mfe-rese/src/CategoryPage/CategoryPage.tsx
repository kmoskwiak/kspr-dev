import { createDirectus, readItem, readItems, rest } from '@directus/sdk';
import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { BubbleHeader } from "@kspr-dev/common/components/BubbleHeader";
import { Container } from "@kspr-dev/common/components/Container";
import { useSSE } from "@kspr-dev/use-sse";
import { useParams } from "react-router-dom";
import { style } from "./CategoryPage.css.ts";
import { CategoryItem, PostResponse } from './CategoryPage.type.ts';



const API = "https://cms.kspr.dev/items/Category";

const getAssetUrl = (id: string) => `https://cms.kspr.dev/assets/${id}`;

const client = createDirectus('https://cms.kspr.dev').with(rest());

export const CategoryPage = () => {
  const { slug } = useParams();

  const [category] = useSSE<CategoryItem>(() => {
    return client.request<CategoryItem>(readItem('Category', encodeURIComponent(slug)));
  }, []);

  const [articles] = useSSE<PostResponse>(() => {
    return client.request<PostResponse>(readItems('Post', {
      filter: {
        category: {
          _eq: slug
        }
      }
    }));
  }, []);


  if (!category || !articles) {
    return null;
  }

  return (
    <div css={style}>
      <Container marginTop='5rem'>
        <div className='ResearchTopics_header-container'>
          <BubbleHeader header={category.name} description={category.description} />
        </div>
        <div>
          {articles && articles.map((article, index) => (
            <ArticleCard
              title={article.title}
              description={article.description}
              imageSrc={getAssetUrl(article.cover)}
              key={index}
              compact
              href={`/${article.slug}`} />
          ))}
        </div>
      </Container>
    </div>
  );
};

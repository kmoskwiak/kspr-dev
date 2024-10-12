import { createDirectus, readItem, readItems, rest } from '@directus/sdk';
import { BubbleHeader } from "@kspr-dev/common/components/BubbleHeader";
import { Container } from "@kspr-dev/common/components/Container";
import { TopicCard } from "@kspr-dev/common/components/TopicCard";
import { useSSE } from "@kspr-dev/use-sse";
import { CategoryItem } from './ResearchTopic.type';
import { style } from "./ResearchTopics.css";

const API = "https://cms.kspr.dev/items/Category";
const getAssetUrl = (id: string) => `https://cms.kspr.dev/assets/${id}`;

const slug = "re/se";
const slugEncoded = encodeURIComponent(slug);
const client = createDirectus('https://cms.kspr.dev').with(rest());

export const ResearchTopics = () => {

  const [reSeCategory] = useSSE<CategoryItem>(() => {
    return client.request<CategoryItem>(readItem('Category', slugEncoded));
  }, []);

  const [researchSubCategories] = useSSE<CategoryItem[]>(() => {
    return client.request<CategoryItem[]>(readItems('Category', {
      filter: {
        parent: {
          _eq: slug
        }
      }
    }));
  }, []);

  if (!reSeCategory) {
    return null;
  }

  return (
    <div css={style}>
      <Container marginTop='5rem'>
        <div className='ResearchTopics_header-container'>
          <BubbleHeader icon={getAssetUrl(reSeCategory.icon)}>{reSeCategory.name}</BubbleHeader>
        </div>

        <div className='ResearchTopics_topics-container'>
          <div className='DynamicIcon_container'>
            <img className='DynamicIcon_icon' src={getAssetUrl('d59be2b4-617f-4cab-82a6-aa6e151e3f5c')} alt="play" width={300} />
            {researchSubCategories && researchSubCategories.map((researchSubCategory, index) => (
              <TopicCard
                name={researchSubCategory.name}
                description={researchSubCategory.description}
                projectId={String(index)}
                key={index}
                image={getAssetUrl(researchSubCategory.cover)}
                href={`/${slug}/${researchSubCategory.slug}`}
              ></TopicCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

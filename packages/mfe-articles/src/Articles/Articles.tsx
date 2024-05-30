import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { Container } from "@kspr-dev/common/components/Container";

export const Articles = () => {

  return (
    <Container marginTop="6rem">
      <ArticleCard
        title="A Memory-Friendly Way of Reading Files in Node.js"
        imageSrc="https://cdn-images-1.medium.com/max/2400/1*0Y8z9n07OCfkF8Oe2v_1gQ.jpeg"
        description="The need to read a file may arise in a variety of cases. It may be a one-time job of parsing error logs, a functionality of an application, a scheduled data migration task, part of a deployment pipeline, etc."
      />
    </Container>
  );
};

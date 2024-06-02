import { ArticleCard } from "@kspr-dev/common/components/ArticleCard";
import { Container } from "@kspr-dev/common/components/Container";
import { style } from "./Articles.css";

export const Articles = () => {

  const articles = [
    {
      "title": "A Memory-Friendly Way of Reading Files in Node.js",
      "description": "How to read gigabytes of data with a limited amount of memory. It's time to do some memory-aware programming.",
      "url": "https://medium.com/better-programming/a-memory-friendly-way-of-reading-files-in-node-js-a45ad0cc7bb6",
      "image": "https://cdn-images-1.medium.com/max/2400/1*0Y8z9n07OCfkF8Oe2v_1gQ.jpeg",
      "publicationDate": "2021/01/04",
      "website": "Medium"
    },
    {
      "title": "How to use useEffect on server-side?",
      "description": "What a bummer —  useEffect does not work on the server-side 😱How to fetch and render data in React SSR application.",
      "url": "https://medium.com/@kaspermoskwiak/how-to-use-useeffect-on-server-side-654932c51b13",
      "image": "https://miro.medium.com/max/2000/1*utp25FPHbw5Rr1bxvhfsJw.png",
      "publicationDate": "2020/05/11",
      "website": "Medium"
    },
    {
      "title": "My approach to SSR and useEffect",
      "description": "A custom SSE hook to fetch data server-side",
      "url": "https://dev.to/kmoskwiak/my-approach-to-ssr-and-useeffect-discussion-k44",
      "image": "https://res.cloudinary.com/practicaldev/image/fetch/s--uP0taflJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--zGY3A0j1--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/c2bztkn3loxheh9cku6f.png",
      "publicationDate": "2020/05/10",
      "website": "DEV.TO"
    },
    {
      "title": "Async iterators in JS - database iteration in NodeJS",
      "description": "How to process entire database (MongoDB, Elasticsearch or PostgreSQL) using modern JavaScript tools. Should I use limit-offset, cursors or range query to get data from database? And why asynchronous iterators play well with database querying.",
      "url": "https://dev.to/kmoskwiak/async-iterators-in-js-database-iteration-in-nodejs-3pm9",
      "image": "https://miro.medium.com/max/2000/1*r-esubczgDBH_BDNzoU92Q.jpeg",
      "publicationDate": "2020/02/24",
      "website": "DEV.TO"
    }
  ]

  return (
    <div css={style}>
      <Container marginTop="6rem">
        {
          articles.map(article => (
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

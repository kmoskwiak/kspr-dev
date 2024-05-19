import { articleContainer } from "./Article.css";

export const Articles = () => {

  return (
    <a css={articleContainer} href={'tst'}>
      <div className="title">{'title'}</div>
      <div>
        <span className="date">{'publicationDate'}</span>
      </div>
      <div className="description">{'description'}</div>
      <div className="image">
        <img height="100%" src={'image'} />
      </div>
    </a>
  );
};

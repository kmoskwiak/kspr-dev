import { styles } from './ArticleDetails.css';
import { Header } from '../Header';

interface ArticleDetailsProps {
  title: string;
  description: string;
  website?: string;
  date?: Date;
}

/**
 * Primary UI component for user interaction
 */
export const ArticleDetails = ({
  title,
  description,
  website,
  date,
  ...props
}: ArticleDetailsProps) => {

  return (
    <div {...props} css={styles}>
      <div className='container'>
        <div className='content'>
          <div className="details">
            <Header outline={false} font='sans-serif'>{title}</Header>
            <div className="meta">
              {date && (
                <span className="meta-date">
                  {date.toLocaleDateString()}
                </span>
              )}
              {website && (
                <span className="meta-website">
                  {website}
                </span>
              )}
            </div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

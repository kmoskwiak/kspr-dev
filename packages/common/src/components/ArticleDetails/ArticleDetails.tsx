import { useTheme } from '@emotion/react';
import { Header } from '../Header';
import { styles } from './ArticleDetails.css';

interface ArticleDetailsProps {
  title: string;
  description: string;
  website?: string;
  date?: string;
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
  const theme = useTheme();
  return (
    <div {...props} css={styles(theme)} data-theme={theme.name}>
      <div className='container'>
        <div className='content'>
          <div className="details">
            <Header outline={false} font='sans-serif'>{title}</Header>
            <div className="meta">
              {date && (
                <span className="meta-date">
                  {date}
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

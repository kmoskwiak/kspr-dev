import { styles } from './ArticleCard.css';
import { ArticleDetails } from '../ArticleDetails';
import { Image } from '../Image';

interface ArticleCardProps {
  title: string;
  description: string;
  website?: string;
  date?: string;
  imageSrc?: string;
  compact?: boolean;
  href?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ArticleCard = ({
  title,
  description,
  website,
  date,
  imageSrc,
  compact,
  href,
  ...props
}: ArticleCardProps) => {

  const compactClassName = compact ? 'compact' : '';

  return (
    <a {...props} href={href} css={styles({ compact })} className={compactClassName}>
      <div className='image-wrapper'>
        <Image src={imageSrc} alt={title} square />
      </div>
      <div className='details-wrapper'>
        <ArticleDetails title={title} description={description} website={website} date={date} />
      </div>
    </a>
  );
};

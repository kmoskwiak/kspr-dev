import { styles } from './ArticleCard.css';
import { Header } from '../Header';
import { ArticleDetails } from '../ArticleDetails';
import { Image } from '../Image';

interface ArticleCardProps {
  title: string;
  description: string;
  website?: string;
  date?: Date;
  imageSrc?: string;
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
  ...props
}: ArticleCardProps) => {

  return (
    <div {...props} css={styles}>
      <div className='image-wrapper'>
        <Image src={imageSrc} alt={title} square filter='grayscale' />
      </div>
      <ArticleDetails title={title} description={description} website={website} date={date} />
    </div>
  );
};

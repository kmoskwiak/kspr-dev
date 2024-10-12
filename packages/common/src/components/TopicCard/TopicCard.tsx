import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { ConicGradient } from '../ConicGradient';
import { Header } from '../Header';
import { Image } from '../Image';
import { styles } from './TopicCard.css';

interface TopicCardProps {
  name: string;
  projectId: string;
  description: string;
  website?: string;
  repository?: string;
  href?: string;
  image?: string;
}

export const TopicCard = ({
  name,
  projectId,
  description,
  website,
  repository,
  href,
  ...props
}: TopicCardProps) => {
  const theme = useTheme();
  return (
    <div {...props} css={styles(theme)}>
      <Link to={href}>
        <div className='TopicCard_container'>
          <Card>
            <div className='card-content'>
              <Header gradient font='mono'>{name}</Header>
              <p className='description'>{description}</p>
            </div>
          </Card>
          <div className='TopicCard_image-container'>
            <div className='TopicCard_gradient'>
              <ConicGradient size={"10rem"} />
            </div>
            <div className='TopicCard_image-container'>
              <Image src={props.image} alt={name} square />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

import { useTheme } from '@emotion/react';
import { styles } from './Image.css';

interface ImageProps {
  src: string;
  filter?: 'none' | 'grayscale';
  square?: boolean;
  alt?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({
  src,
  filter,
  square,
  alt,
  ...props
}: ImageProps) => {
  const theme = useTheme();
  const filterClass = filter ? `filter-${filter}` : 'filter-none';
  const aspectRatio = square ? 'aspect-square' : '';

  return (
    <div {...props} css={styles(theme)} className={aspectRatio}>
      <img src={src} className={`bg ${filterClass}`} alt={alt} />
      <img src={src} className={filterClass} alt={alt} />
    </div>
  );
};

import React from 'react';
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

  const filterClass = filter ? `filter-${filter}` : 'filter-none';
  const aspectRatio = square ? 'aspect-square' : '';

  return (
    <div {...props} css={styles} className={aspectRatio}>
      <img src={src} className={filterClass} alt={alt} />
    </div>
  );
};

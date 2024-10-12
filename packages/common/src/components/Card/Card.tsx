import { useTheme } from '@emotion/react';
import React from 'react';
import { styles } from './Card.css';

interface CardProps {
  /**
   * Children of the card
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  children,
  ...props
}: CardProps) => {
  const theme = useTheme();
  return (
    <div {...props} css={styles(theme)}>
      {children}
    </div>
  );
};

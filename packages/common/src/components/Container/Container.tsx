import React from 'react';
import { styles } from './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  marginTop?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Container = ({
  children,
  marginTop,
  ...props
}: ContainerProps) => {

  return (
    <div {...props} css={styles} style={{ marginTop }}>
      {children}
    </div>
  );
};

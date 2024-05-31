import React from 'react';
import { styles } from './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  marginTop?: string;
  display?: 'grid'
  zIndex?: string
}

/**
 * Primary UI component for user interaction
 */
export const Container = ({
  children,
  marginTop,
  display,
  zIndex,
  ...props
}: ContainerProps) => {

  return (
    <div css={styles({display, zIndex})} style={{ marginTop }} {...props}>
      {children}
    </div>
  );
};

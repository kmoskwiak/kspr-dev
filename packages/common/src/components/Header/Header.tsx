import React from 'react';
import { styles } from './Header.css';

interface HeaderProps {
  /**
   * Text of header
   */
  children: React.ReactNode;
  outline?: boolean;
  font?: 'mono' | 'sans-serif';
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  children,
  font,
  outline,
  ...props
}: HeaderProps) => {

  const fontClass = font ? `font-style-${font}` : 'font-style-mono';
  const outlineClass = outline ? 'title-variant-outline' : 'title-variant-fill';

  return (
    <h2 css={styles} className={`${fontClass} ${outlineClass}`}>
      {children}
    </h2>
  );
};

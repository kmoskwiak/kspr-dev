import React from 'react';
import { styles } from './Logo.css';

interface LogoProps {

}

/**
 * Primary UI component for user interaction
 */
export const Logo = ({
  ...props
}: LogoProps) => {

  return (
    <div css={styles}>
      <div className="hello">Hello,</div>
      <div className="name">I’m Kasper</div>
      <div className="job">a software engineer.</div>
    </div>
  );
};

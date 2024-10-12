import React from 'react';
import { Card } from '../Card';
import { Logo } from '../Logo';
import { ThemeButton } from '../ThemeButton';
import { styles } from './HeadBar.css';

interface HeadBarProps {
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const HeadBar = ({
  children,
  ...props
}: HeadBarProps) => {

  return (
    <div css={styles}>
      <Card>
        <div className='container'>
          <a className='logo' href="/">
            <Logo />
          </a>
          <div className='theme-button-container'>
            <ThemeButton />
          </div>
          <div className='menu'>
            {children}
          </div>
        </div>
      </Card>
    </div>
  );
};

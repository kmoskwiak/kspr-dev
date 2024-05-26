import React from 'react';
import { styles } from './HeadBar.css';
import { Logo } from '../Logo';
import { Card } from '../Card';

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
          <div className='logo'>
            <Logo />
          </div>
          <div className='menu'>
            {children}
          </div>
        </div>
      </Card>
    </div>
  );
};

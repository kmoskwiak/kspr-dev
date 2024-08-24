import React from 'react';
import { styles } from './ReSeHeadBar.css';

interface ReSeHeadBarProps {
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const ReSeHeadBar = ({
  children,
  ...props
}: ReSeHeadBarProps) => {

  return (
    <div css={styles}>
        <div className='container'>
          <a className='logo' href="/re/se">
            re/se
          </a>
          <div className='menu'>
            {children}
          </div>
        </div>
    </div>
  );
};

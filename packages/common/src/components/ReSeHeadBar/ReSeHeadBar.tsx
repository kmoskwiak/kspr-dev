import { useTheme } from '@emotion/react';
import React from 'react';
import { Card } from '../Card';
import { ThemeButton } from '../ThemeButton';
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
  const theme = useTheme();
  return (
    <div css={styles(theme)}>
      <Card>
        <div className='container'>
          <a className='logo' href="/re/se">
            re/se
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

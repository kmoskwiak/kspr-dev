import { useTheme } from '@emotion/react';
import React from 'react';
import { Theme } from '../../theme/ThemeProvider';
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
    <Theme>
      <div css={styles(theme)}>
        <div className='container'>
          <a className='logo' href="/re/se">
            re/se
          </a>
          <div className='menu'>
            {children}
          </div>
        </div>
      </div>
    </Theme>
  );
};

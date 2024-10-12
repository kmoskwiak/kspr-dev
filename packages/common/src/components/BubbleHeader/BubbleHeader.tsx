import { useTheme } from '@emotion/react';
import React from 'react';
import { ConicGradient } from '../ConicGradient';
import { Header } from '../Header';
import { styles } from './BubbleHeader.css';

interface BubbleHeaderProps {
  /**
   * Text of header
   */
  children: React.ReactNode;
  outline?: boolean;
  font?: 'mono' | 'sans-serif';
  icon?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BubbleHeader = ({
  children,
  font,
  outline,
  ...props
}: BubbleHeaderProps) => {
  const theme = useTheme();

  return (
    <div css={styles(theme)}>
      {props.icon && <img className='icon' src={props.icon} crossOrigin='anonymous' />}
      <div className='bubble top'>
        <ConicGradient size={'200px'} color='#4200FF' />
      </div>
      <div className='bubble bottom'>
        <ConicGradient size={'100px'} rotation={180} color='#4200FF' />
      </div>
      <Header font={font} outline={outline}>{children}</Header>
    </div>
  );
};

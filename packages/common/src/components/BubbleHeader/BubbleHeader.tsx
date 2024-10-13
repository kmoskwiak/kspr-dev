import { useTheme } from '@emotion/react';
import { Header } from '../Header';
import { styles } from './BubbleHeader.css';

interface BubbleHeaderProps {
  header?: string;
  description?: string;
  outline?: boolean;
  font?: 'mono' | 'sans-serif';
  icon?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BubbleHeader = ({
  header,
  description,
  font,
  outline,
  ...props
}: BubbleHeaderProps) => {
  const theme = useTheme();

  return (
    <div css={styles(theme)}>
      {props.icon && <img className='icon' src={props.icon} crossOrigin='anonymous' />}
      <Header font={font} outline={outline}>{header}</Header>
      <p className='description'>{description}</p>
    </div>
  );
};

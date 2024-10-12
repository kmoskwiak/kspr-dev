import { useTheme } from '@emotion/react';
import { styles } from './Header.css';
import { HeaderProps } from './Header.type';

export const Header = ({
  children,
  el = 'h2',
  ...props
}: HeaderProps) => {
  const theme = useTheme();
  const fontClass = props.font ? `font-style-${props.font}` : 'font-style-mono';
  const outlineClass = props.outline ? 'title-variant-outline' : 'title-variant-fill';
  const gradientClass = props.gradient ? 'title-gradient' : '';

  const HeadingTag = el;

  return (
    <HeadingTag css={styles(props, theme)} className={`${fontClass} ${outlineClass} ${gradientClass}`}>
      {children}
    </HeadingTag>
  );
};

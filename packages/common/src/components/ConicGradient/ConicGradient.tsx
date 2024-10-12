import { useTheme } from '@emotion/react';
import { styles } from './ConicGradient.css';
import { ConicGradientProps } from './ConicGradient.type';


export const ConicGradient = ({
  ...props
}: ConicGradientProps) => {
  const theme = useTheme();
  return (
    <div {...props} css={styles(props, theme)}></div>
  );
};

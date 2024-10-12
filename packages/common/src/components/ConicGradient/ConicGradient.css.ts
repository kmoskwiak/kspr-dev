import { css, Theme } from '@emotion/react';
import { ConicGradientProps } from './ConicGradient.type';

export const styles = ({ size = "400px", rotation = 0, color }: ConicGradientProps, theme: Theme) => css`
  width: ${size};
  height: ${size};
  border-radius: 100%;
  transform: rotate(${rotation}deg);
  background-image: conic-gradient(from -90deg at 50% 60%, ${color ?? "var(--colors-neon-blue)"}, transparent);
`
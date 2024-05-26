import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  border: 2px solid ${theme.two};
  padding: 0;
  border-radius: 1rem;
  background-color: ${theme.one};
  overflow: hidden;

  img {
    display: block;
    border-radius: 1rem;
    width: 100%;
    scale: 1.1;

    &.filter-grayscale {
      filter: grayscale(100%) contrast(1.2);
    }
  }

  &.aspect-square {
    aspect-ratio: 1/1;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
`
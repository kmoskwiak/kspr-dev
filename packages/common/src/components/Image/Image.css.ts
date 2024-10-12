import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  border: 0px solid var(--colors-text);
  padding: 0.3rem;
  border-radius: 0.6rem;
  background-color: var(--colors-background);
  overflow: hidden;
  position: relative;

  img {
    display: block;
    border-radius: 0.4rem;
    width: 100%;
    position: relative;

    &.filter-grayscale {
      filter: grayscale(100%) contrast(1.2);
    }

    &.bg {
      scale: 1.2;
      position: absolute;
      top: 0;
      filter: blur(12px);
      opacity: 0.5;
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
import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  font-family: ${theme.font.main};
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  position: relative;
  color: var(--colors-text);

  img {
    border-radius: 10px;
    max-width: 100%;
    position: relative;

    @media (min-width: 900px) {
      max-width: calc(100% + 4rem);
      left: -2rem;
    }

    @media (min-width: 1100px) {
      max-width: calc(100% + 10rem);
      left: -5rem;
    }
  }

  a {
    color: var(--colors-text);
    text-decoration: underline;
    font-weight: bold;
  }
`
import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  font-family: ${theme.font.main};
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  position: relative;
  color: var(--colors-text);
  display: inline-block;
  margin: 5rem auto;

  a {
    color: var(--colors-text);
    text-decoration: underline;
    font-weight: bold;
  }
`
import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  font-family: ${theme.font.main};
  color: var(--colors-text);
  display: none;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: grid;
    gap: 1rem;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    font-size: 0.9rem;
    align-items: stretch;
  }


  .link {
    color: var(--colors-text);
    text-decoration: none;
    display: grid;
    align-items: center;
    padding: 0 1rem;

    &:hover {
      text-decoration: dotted underline;
    }

    &.active {
      font-weight: bold;
    }

    &.disabled {
      cursor: not-allowed;
    }

    &.disabled:hover {
      text-decoration: none;
    }

    &:visited {
      color: var(--colors-text);
    }
  }
`
import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  font-family: ${theme.fontMain};
  color: ${theme.two};
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  font-size: 0.9rem;
  align-items: stretch;

  .link {
    color: ${theme.two};
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
      color: ${theme.two};
    }
  }
`
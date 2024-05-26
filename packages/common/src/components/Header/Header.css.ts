import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  --header-shadow-spread: 1px;
  --header-shadow-offset: 0.5px;
  --header-shadow-negative-offset: -0.5px;

  margin: 0;
  padding: 0;

  &.font-style-sans-serif {
    font-family: ${theme.fontMain};
  }

  &.font-style-mono {
    font-family: ${theme.fontMono};
  }

  &.title-variant-outline {
    text-shadow: var(--header-shadow-offset) 0 var(--header-shadow-spread) ${theme.two}, 0 var(--header-shadow-offset) var(--header-shadow-spread) ${theme.two}, var(--header-shadow-negative-offset) 0 var(--header-shadow-spread) ${theme.two}, 0px var(--header-shadow-negative-offset) var(--header-shadow-spread) ${theme.two};
    color: ${theme.one};
  }

  &.title-variant-fill {
    text-shadow: none;
    color: ${theme.two};
  }
`
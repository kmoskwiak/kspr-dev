import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  display: inline-block;
  position: relative;

  .description {
    font-family: ${theme.font.main};
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--colors-text);
    margin: 2rem 0;
    padding: 0;
    opacity: 0.7;
  }

  .icon {
    z-index: 10;
    width: 280px;
    height: 280px;
    position: absolute;
    right: -230px;
    bottom: -160px;
    animation: 1s ease-out 0s 1 slideInFromBottom;
  }

  h1, h2 {
    --header-shadow-spread: 1px;
    --header-shadow-offset: 0.5px;
    --header-shadow-negative-offset: -0.5px;
    font-size: 2.8rem;
    margin: 0;
    padding: 0;
    font-weight: 600;

    &.font-style-sans-serif {
      font-family: ${theme.font.main};
    }

    &.font-style-mono {
      font-family: ${theme.font.mono};
    }

    &.title-variant-outline {
      text-shadow: var(--header-shadow-offset) 0 var(--header-shadow-spread) var(--colors-text), 0 var(--header-shadow-offset) var(--header-shadow-spread) var(--colors-text), var(--header-shadow-negative-offset) 0 var(--header-shadow-spread) var(--colors-text), 0px var(--header-shadow-negative-offset) var(--header-shadow-spread) var(--colors-text);
      color: var(--colors-text);
    }

    &.title-variant-fill {
      text-shadow: none;
      color: var(--colors-text);
    }
  }
`
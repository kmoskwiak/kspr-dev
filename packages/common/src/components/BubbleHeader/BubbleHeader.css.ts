import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  display: inline-block;
  position: relative;
  margin: 150px 180px 100px 100px;

  .bubble {
    position: absolute;
    width: 100%;
    height: 100%;
    width: 0;
    height: 0;
  }

  .top {
    top: -145px;
    right: 20px;
    z-index: 0;
  }

  .bottom {
    bottom: 20px;
    left: -90px;
    z-index: 0;
  }

  @keyframes slideInFromBottom {
  0% {
    transform: translateY(100%) translateX(-100%);
  }
  100% {
    transform: translateY(0) translateY(0);
  }
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

  h2 {
    --header-shadow-spread: 1px;
    --header-shadow-offset: 0.5px;
    --header-shadow-negative-offset: -0.5px;

    margin: 0;
    padding: 0;
    font-weight: 400;

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
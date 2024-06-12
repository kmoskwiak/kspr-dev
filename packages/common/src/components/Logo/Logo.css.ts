import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  position: relative;
  display: inline-block;
  transform: scale(0.7);
  font-family: ${theme.fontMain};
  color: ${theme.two};

  @media screen and (min-width: 1260px) {
    transform: scale(1);
  }

  .hello {
    --header-shadow-spread: 1px;
    --header-shadow-offset: 0.5px;
    --header-shadow-negative-offset: -0.5px;

    text-shadow: var(--header-shadow-offset) 0 var(--header-shadow-spread) ${theme.two}, 0 var(--header-shadow-offset) var(--header-shadow-spread) ${theme.two}, var(--header-shadow-negative-offset) 0 var(--header-shadow-spread) ${theme.two}, 0px var(--header-shadow-negative-offset) var(--header-shadow-spread) ${theme.two};
    position: absolute;
    top: -2.2rem;
    left: -2.5rem;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 2rem;
    color: ${theme.one};
    display: inline-block;
    transform: rotate(5deg);
  }

  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.2rem;
  }

  .job {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.12rem;
    line-height: 1.2rem;
  }
`;

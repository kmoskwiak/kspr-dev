import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  transform: scale(0.7);
  font-family: ${theme.font.main};
  color: var(--colors-text);

  @media screen and (min-width: 1260px) {
    transform: scale(1);
  }

  .hello {
    --header-shadow-spread: 1px;
    --header-shadow-offset: 0.5px;
    --header-shadow-negative-offset: -0.5px;

    color: var(--colors-purple);
    background: -webkit-linear-gradient(0deg, var(--colors-blue), var(--colors-purple));
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    position: absolute;
    top: -2.2rem;
    left: -2.5rem;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 2rem;
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

import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  width: 100%;
  position: static;
  
  .container {
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
  }

  .logo {
    --header-shadow-spread: 1px;
    --header-shadow-offset: 0.5px;
    --header-shadow-negative-offset: -0.5px;
    
    font-family: monospace;
    color: var(--colors-purple);
    background: -webkit-linear-gradient(0deg, var(--colors-blue), var(--colors-purple));
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    font-weight: 100;
    font-size: 2rem;
    display: inline-block;
    text-decoration: none;
  }

  .menu {
    display: grid;
    align-items: stretch;
  }
`;

import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  width: 100%;
  position: relative;
  
  .container {
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    align-items: stretch;
  
    @media (min-width: 300px) { 
      grid-template-columns: max-content min-content min-content;
    }
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
    line-height: 3rem;
    display: inline-block;
    text-decoration: none;
  }

  .menu {
    display: grid;
    align-items: stretch;
  }

  .theme-button-container {
    display: none;
    grid-auto-flow: column;
    align-items: center;

    @media (min-width: 300px) { 
      display: grid;
    }
  }
`;

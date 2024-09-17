import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
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
    color: ${theme.purple};
    //text-shadow: var(--header-shadow-offset) 0 var(--header-shadow-spread) ${theme.two}, 0 var(--header-shadow-offset) var(--header-shadow-spread) ${theme.two}, var(--header-shadow-negative-offset) 0 var(--header-shadow-spread) ${theme.two}, 0px var(--header-shadow-negative-offset) var(--header-shadow-spread) ${theme.two};
    background: -webkit-linear-gradient(0deg, ${theme.blue}, ${theme.purple});
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
    //grid-area: menu;
  }
`;

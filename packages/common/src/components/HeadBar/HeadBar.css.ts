import { css } from '@emotion/react';

export const styles = css`
  width: 100%;
  position: relative;
  
  .container {
    display: grid;
    grid-template-columns: max-content min-content;
    grid-template-rows: 1fr;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    align-items: stretch;

    @media (min-width: 300px) { 
      grid-template-columns: max-content min-content min-content;
    }

  }

  .menu {
    display: grid;
    align-items: stretch;
    position: static;
    justify-content: end;
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

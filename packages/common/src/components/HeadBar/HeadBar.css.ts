import { css } from '@emotion/react';

export const styles = css`
  width: 100%;
  position: static;
  
  .container {
    display: grid;
    grid-template-columns: max-content auto max-content;
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    align-items: stretch;
  }

  .menu {
    display: grid;
    align-items: stretch;
  }

  .theme-button-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
  }
`;

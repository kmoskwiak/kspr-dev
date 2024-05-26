import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  width: 100%;
  
  .container {
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
  }

  .logo {
    //grid-area: logo;
  }

  .menu {
    display: grid;
    align-items: stretch;
    //grid-area: menu;
  }
`;

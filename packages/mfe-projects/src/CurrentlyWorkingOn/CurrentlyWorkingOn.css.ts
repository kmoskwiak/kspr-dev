import { css } from '@emotion/react';
import { theme } from '@kspr-dev/common';

export const style = css`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  position: relative;
  padding: 0.5rem;
  overflow-x: clip;
  z-index: 40;
  display: grid;
  gap: 0.5rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-auto-flow: column;
  }

  .container {
      position: relative;
  }

  .gradient-container {
      position: absolute;
      top: -200px;
      left: 200px;
      z-index: 0;
  }

  .project-card-container {
      z-index: 40;
      position: relative;
  }
`;
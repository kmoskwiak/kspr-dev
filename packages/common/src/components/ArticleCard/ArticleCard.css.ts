import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = ({ compact = false }: { compact: boolean }) => css`
  text-decoration: none;
  display: grid;

  .image-wrapper {
    min-width: 150px;
    padding: 1rem 1rem;
  }
  
  @media screen and (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1.5fr;

    .image-wrapper {
      min-width: 150px;
      padding: 1rem 4rem;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.xl}) {
    .image-wrapper {
      min-width: 150px;
      padding: 1rem 8rem;
    }
  }

  
  &.compact {
    grid-template-columns: 1fr 8fr;

    .image-wrapper {
      padding: 1rem 1rem;
    }

  }
`
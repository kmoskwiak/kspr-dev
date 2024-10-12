import { css, Theme } from '@emotion/react';

export const styles = ({ compact = false }: { compact: boolean }, theme: Theme) => css`
  text-decoration: none;
  display: grid;
  grid-area: image;

  .details-wrapper {
    order: 1;
  }

  .image-wrapper {
    order: 2;
    min-width: 150px;
    padding: 1rem 1rem;
  }
  
  @media screen and (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1.5fr;

    .details-wrapper {
      order: 2;
    }

    .image-wrapper {
      order: 1;
      min-width: 150px;
      padding: 1rem 2rem;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1.5fr;

    .details-wrapper {
      order: 2;
    }

    .image-wrapper {
      order: 1;
      min-width: 150px;
      padding: 1rem 4rem;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.xl}) {
    .details-wrapper {
      order: 2;
    }

    .image-wrapper {
      order: 1;
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
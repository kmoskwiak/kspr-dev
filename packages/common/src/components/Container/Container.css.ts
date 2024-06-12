import { css } from '@emotion/react';
import { theme } from '../../theme';

type Props = {
  display?: 'grid';
  zIndex?: string;
}

export const styles = ({ display, zIndex }: Props) => css`
  max-width: 1200px;
  margin: 0 1rem;
  position: relative;

  @media (min-width: 1200px) {
    margin: 0 auto;
  }

  z-index: ${zIndex ? zIndex : '50'};

  ${display === 'grid' && (
    `
      display: grid;
      gap: 0.5rem;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
    `
  )}
`
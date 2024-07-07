import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  border: 1px solid ${theme.darkStroke};
  box-shadow: inset 0 4px 0 ${theme.darkStroke};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${theme.darkFill};
`
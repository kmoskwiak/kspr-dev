import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background-image: conic-gradient(from -90deg at 50% 60%, ${theme.blue}, ${theme.one});
`
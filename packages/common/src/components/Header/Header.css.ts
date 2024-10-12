import { css, Theme } from '@emotion/react';
import { HeaderProps } from './Header.type';

export const styles = ({ bold = false }: Omit<HeaderProps, 'children'>, theme: Theme) => css`
  --header-shadow-spread: 1px;
  --header-shadow-offset: 0.5px;
  --header-shadow-negative-offset: -0.5px;

  margin: 0;
  padding: 0;

  font-weight: ${bold ? '800' : '400'}400;

  &.font-style-sans-serif {
    font-family: ${theme.font.main};
  }

  &.font-style-mono {
    font-family: ${theme.font.mono};
  }

  &.title-variant-outline {
    text-shadow: var(--header-shadow-offset) 0 var(--header-shadow-spread) var(--colors-text), 0 var(--header-shadow-offset) var(--header-shadow-spread) var(--colors-text), var(--header-shadow-negative-offset) 0 var(--header-shadow-spread) var(--colors-text), 0px var(--header-shadow-negative-offset) var(--header-shadow-spread) var(--colors-text);
    color: var(--colors-text);
  }

  &.title-variant-fill {
    text-shadow: none;
    color: var(--colors-text);
  }

  &.title-gradient {
    color: var(--colors-purple);
    background: -webkit-linear-gradient(0deg, var(--colors-purple), var(--colors-blue));
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`
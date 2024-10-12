import { Theme } from "@emotion/react";

export const DEFAULT_THEME = 'dark';

export const theme = {
  purple: "#6B0BE5",
  neonBlue: "#4200FF",
  blue: "#0078ff",
  darkStroke: "#262626",
  darkFill: "#131313",
  darkGrey: "rgb(37, 28, 53)",
  //one: "#131313",
  //two: "#ABBED0",
  one: "#090909",
  oneRgb: "19, 19, 19",
  two: "#e6ecf2",
  twoRgb: "171, 190, 208",
  fontMono: '"Ubuntu Mono", monospace',
  fontMain: 'Ubuntu, sans-serif',
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
} as const;

const commonTheme = {
  font: {
    main: 'Ubuntu, sans-serif',
    mono: '"Ubuntu Mono", monospace'
  },
  colors: {
    purple: "#6B0BE5",
    "neon-blue": "#4200FF",
    blue: "#0078ff",
    border: "#262626",
    "card-background": "#131519",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
}

export const themeConfiguration: {
  light: Theme; dark: Theme;
} = {
  light: {
    ...commonTheme,
    name: 'light',
    colors: {
      ...commonTheme.colors,
      background: '#e6ecf2',
      text: '#090909',
      border: "#D2D2D2",
      "card-background": "#F7F7F7",
    },

  },
  dark: {
    ...commonTheme,
    name: 'dark',
    colors: {
      ...commonTheme.colors,
      background: '#090909',
      text: '#e6ecf2',
      border: "#262626",
      "card-background": "#131519",
    }
  }
}

import type { Preview } from "@storybook/react";
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { ThemeToggleProvider } from "../src/theme/ThemeProvider";
import { themeConfiguration } from "../src/theme/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: themeConfiguration.dark.colors.background },
        { name: 'Light', value: themeConfiguration.light.colors.background },
      ],
      default: 'Dark',
    },
  },
  globals: {
    selectedTheme: 'dark',
    themes: [
      {
        name: 'dark',
        color: '#111',
        themeObject: {
          ...themeConfiguration.dark,
        }
      },
      {
        name: 'light',
        color: '#eee',
        themeObject: {
          ...themeConfiguration.light,
        }
      }
    ]
  },
  decorators: [
    withThemeProvider(ThemeToggleProvider)
  ],
};

export default preview;

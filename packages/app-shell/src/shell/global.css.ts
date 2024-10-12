import { css } from '@emotion/react';
import { themeConfiguration } from "@kspr-dev/common";

export const globalStyles = css`
    :root {
        --colors-background: ${themeConfiguration.dark.colors.background};
        --colors-text: ${themeConfiguration.dark.colors.text};
        --colors-border: ${themeConfiguration.dark.colors.border};
        --colors-card-background: ${themeConfiguration.dark.colors.cardBackground};
        --colors-purple: ${themeConfiguration.dark.colors.purple};
        --colors-neon-blue: ${themeConfiguration.dark.colors.neonBlue};
        --colors-blue: ${themeConfiguration.dark.colors.blue};
    }

    html, body {
        overflow-y: auto;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-height: 100%;
        height: 100%;
        overflow-y: auto;
        background: var(--colors-background);
    }
`
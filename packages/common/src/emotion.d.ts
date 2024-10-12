import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        name: 'light' | 'dark';
        colors: {
            background: string;
            text: string;
            purple: string;
            "neon-blue": string;
            blue: string;
            border: string;
            "card-background": string;
        },
        font: {
            main: string;
            mono: string;
        },
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        }
    }
}

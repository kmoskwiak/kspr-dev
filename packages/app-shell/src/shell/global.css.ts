import { theme } from "@kspr-dev/common";
import { css } from '@emotion/react'

export const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    
    html, body {
        background: ${theme.one};
        overflow-y: auto;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-height: 100%;
        height: 100%;
        overflow-y: auto;
    }
`
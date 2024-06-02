import { theme } from "@kspr-dev/common";
import { css } from '@emotion/react'

export const globalStyles = css`
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
import { css } from '@emotion/react';
import { theme } from '@kspr-dev/common';

export const styles = css`
    max-width: 800px;
    margin: 3rem auto 0 auto;

    .SingleArticle_body {
        color: ${theme.two};
        font-size: 1.2rem;
        font-family: Ubuntu;
        line-height: 2rem;
        font-size: 1rem;

        a {
            color: ${theme.two};
            text-decoration: underline;
            font-weight: bold;
        }
    }
`
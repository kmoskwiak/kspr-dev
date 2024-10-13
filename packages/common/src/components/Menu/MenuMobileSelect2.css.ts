import { css, Theme } from '@emotion/react';

export const mobileDrawerStyles = (theme: Theme) => css`

    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    display: none;
    border: 1px solid var(--colors-border);
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--colors-card-background);

    &.active {
        display: block;
    }

    .menu-ring {
        .link {
            list-style: none;
            margin: 0;
            display: block;
            border-radius: 0.5rem;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: end;
            margin-bottom: 0.4rem;
            margin-right: 0.5rem;
            text-decoration: none;
            font-family: ${theme.font.main};
            color: var(--colors-text);
        }
    }
`

export const styles = (theme: Theme) => css`
    display: block;
    position: static;

    @media (min-width: ${theme.breakpoints.sm}) {
        display: none;
    }
    
    &.active {
        backdrop-filter: blur(5px);
    }

    .menu-position {
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .menu-bubble {
        background: transparent;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;

        img {    
            width: 30px;
            height: 30px;
        }
    }

    


`
import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
    display: block;
    position: relative;

    @media (min-width: ${theme.breakpoints.sm}) {
        display: none;
    }
    
    &.active {
        backdrop-filter: blur(5px);
    }
    
    .menu-container {
        position: static;
        display: none;
    }

    &.active .menu-container {
        display: block;
    }

    .menu-position {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .menu-bubble {
        background: transparent;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        position: sticky;
        top: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.5);
        border: none;
        outline: none;

        img {    
            width: 30px;
            height: 30px;
        }
    }

    .menu-ring {
        .link {
            list-style: none;
            margin: 0;
            display: block;
            border-radius: 0.5rem;
            width: 100px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: end;
            margin-bottom: 0.4rem;
            margin-right: 0.5rem;
            background-color: ${theme.one};
            text-decoration: none;
            font-family: ${theme.fontMain};
            color: ${theme.two};
            box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.5);
        }
    }


`
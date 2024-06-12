import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    
    .menu-container {
        width: 1px;
        height: 1px;
        position: absolute;

        bottom: 100px;
        right: 50px;
    }

    .menu-bubble {
        background-color: ${theme.purple};
        border-radius: 50%;
        height: 50px;
        width: 50px;
        position: absolute;
        top: -25px;
        left: -25px;
    }

    .menu-ring {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        position: absolute;
        top: -100px;
        left: -100px;
        //border: 1px solid ${theme.purple};
        padding: 0;
        margin: 0;
        scale: 0.1;
        transition: scale 0.5s;

        &.active {
            scale: 1;
        }

        .link {
            list-style: none;
            margin: 0;
            display: block;
            //border: 1px solid ${theme.purple};
            width: 100px;
            height: 40px;
            display: flex;
            align-items: center;
            position: absolute;
            top: 80px;
            left: 0;
            transform-origin: center right;
            font-family: ${theme.fontMain};
            color: ${theme.two};
            text-shadow: 0 0 10px #000;
            
            &:nth-child(1) {
                transform: rotate(0deg) translateX(0) translateY(0px);

                .text {
                    transform: translateX(-20px);
                }
            }

            &:nth-child(2) {
                transform: rotate(-45deg) translateX(0px) translateY(0px);
            }

            &:nth-child(3) {
                transform: rotate(-90deg);
            }
        }
    }
`
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

        bottom: 50%;
        right: 50%;
    }

    .drop-area {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        border: 1px solid ${theme.purple};
    }

    .menu-bubble {
        background-color: ${theme.purple};
        border-radius: 50%;
        height: 50px;
        width: 50px;
        position: absolute;
        bottom: 25px;
        right: 25px;
    }

    .menu-ring {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
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
            border: 1px solid ${theme.purple};
            width: 100px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 80px;
            left: 0;
            transform-origin: center center 50px;
            font-family: ${theme.fontMain};
            color: ${theme.two};
            text-shadow: 0 0 10px #000;

            
            &:nth-child(1) {
                .text {
                }
            }

            &:nth-child(2) {
            }

            &:nth-child(3) {
            }
        }
    }

    .menu-select {
        width: 50px;
        /********** Range Input Styles **********/
        /*Range Reset*/
        input[type="range"] {
        -webkit-appearance: none;
            appearance: none;
            background: transparent;
            cursor: pointer;
            width: 5rem;
        }

        /* Removes default focus */
        input[type="range"]:focus {
        outline: none;
        }

        /***** Chrome, Safari, Opera and Edge Chromium styles *****/
        /* slider track */
        input[type="range"]::-webkit-slider-runnable-track {
            background-color: #053a5f;
            border-radius: 0.5rem;
            height: 2.5rem; 
        }

        /* slider thumb */
        input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: 5px; /* Centers thumb on the track */

        /*custom styles*/
        background-color: #5cd5eb;
        height: 2rem;
        width: 1rem;
        }

        input[type="range"]:focus::-webkit-slider-thumb {   
        border: 1px solid #053a5f;
        outline: 3px solid #053a5f;
        outline-offset: 0.125rem; 
        }

        /******** Firefox styles ********/
        /* slider track */
        input[type="range"]::-moz-range-track {
        background-color: #053a5f;
        border-radius: 0.5rem;
        height: 0.5rem;
        }

        /* slider thumb */
        input[type="range"]::-moz-range-thumb {
        border: none; /*Removes extra border that FF applies*/
        border-radius: 0; /*Removes default border-radius that FF applies*/

        /*custom styles*/
        background-color: #5cd5eb;
        height: 2rem;
        width: 1rem;
        }

        input[type="range"]:focus::-moz-range-thumb {
        border: 1px solid #053a5f;
        outline: 3px solid #053a5f;
        outline-offset: 0.125rem; 
        }
    }
`
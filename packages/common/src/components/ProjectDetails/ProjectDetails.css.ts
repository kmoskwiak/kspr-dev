import { css } from '@emotion/react';
import { theme } from '../../theme';

export const styles = css`
  color: ${theme.two};
  font-family: ${theme.fontMono};
  font-size: 1rem;

  .container {
    margin: 1rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'counter content';
  }

  .counter {
    color: ${theme.blue};
    grid-area: counter;
    padding-top: 0.5rem;
    padding-right: 2rem;
  }

  .content {
    grid-area: content;
  }

  .description {
      padding: 1rem 0px 0 0;
      margin-bottom: 20px;
      font-size: 0.8rem;
    }


    .links {
      display: flex;
      gap: 2rem;

      .project-link {
        font-size: 0.8rem;
        display: inline-block;
        font-style: normal;
        font-weight: 400;
        padding: 0px;
        border-radius: 3px;
        color: ${theme.two};
        cursor: pointer;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline dotted;
        }
      }
    }
`
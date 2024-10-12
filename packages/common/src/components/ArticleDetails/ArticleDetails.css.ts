import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  color: var(--colors-text);
  font-family: ${theme.font.main};
  font-size: 1rem;

  .container {
    margin: 1rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'counter content';
  }

  .counter {
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
      font-size: 1rem;
      line-height: 1.8rem;
    }

    .meta {
      display: flex;
      gap: 2rem;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 400;
      padding: 0.8rem 0px;
      opacity: 0.6;
      
      .meta-date, .meta-website {
        display: inline-block;
      }
    }
`
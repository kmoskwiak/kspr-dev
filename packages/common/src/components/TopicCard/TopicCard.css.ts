import { css, Theme } from '@emotion/react';

export const styles = (theme: Theme) => css`
  color: var(--colors-text);
  font-size: 1rem;
  text-decoration: none;
  font-family: ${theme.font.mono};
  font-weight: 400;

  a {
    text-decoration: none;
    color: var(--colors-text);
  }

  .card-content {
    text-decoration: none;
    padding: 3rem 2.5rem
  }

  .description {
    padding: 1rem 0px 0 0;
    margin-bottom: 20px;
    font-size: 0.9rem;
  }

  .TopicCard_container {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: min-content 1fr;
    align-items: start;
    padding: 1rem;
    overflow: hidden;

    @media (min-width: ${theme.breakpoints.md}) {
      overflow: visible;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 2.5fr 1fr;
    }
  }

  .TopicCard_image-container {
    position: relative;
    padding: 2rem;
    margin-top: -4rem;
    box-sizing: content-box;
    transition: margin 0.3s ease-in-out;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: 2rem;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      padding: 1rem;
      margin-top: 2rem;
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      padding: 1rem;
      margin-top: 2rem;
      margin-left: 1rem;
    }
  }

  .TopicCard_gradient {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: inline-block;
    z-index: -1;
    transform: rotate(0deg);
    transition: bottom 0.3s ease-in-out, right 0.3s ease-in-out, transform 0.3s ease-in-out; 

    @media (min-width: ${theme.breakpoints.lg}) {
      bottom: -1rem;
      right: -1rem;
    }
  }

  .TopicCard_image-container {
    position: relative;
  }
`
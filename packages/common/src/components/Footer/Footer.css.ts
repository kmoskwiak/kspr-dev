import { css, Theme } from "@emotion/react";

export const styles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 10px;
  margin: 200px auto 100px auto;
  text-align: center;
  justify-content: center;
  font-family: ${theme.font.main};
  color: var(--colors-text);

  .avatarContainer {
    padding: 1px;
    background: var(--colors-background);
    display: inline-block;
    border-radius: 100%;
    background: linear-gradient(90deg, var(--colors-text) 20%, var(--colors-text) 50%);
  }

  .avatar {
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }

  .description {
    align-self: center;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 28px;

    a {
      color: var(--colors-text);
      text-decoration: underline dotted;
    }
  }
`;

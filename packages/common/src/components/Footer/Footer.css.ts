import { css } from "@emotion/react";
import { theme } from "../../theme";

export const styles = css`
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 10px;
  margin: 200px auto 100px auto;
  text-align: center;
  justify-content: center;
  font-family: ${theme.fontMain};
  color: ${theme.two};

  .avatarContainer {
    padding: 1px;
    background: ${theme.one};
    display: inline-block;
    border-radius: 100%;
    background: linear-gradient(90deg, ${theme.two} 20%, ${theme.two} 50%);
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
      color: ${theme.two};
      text-decoration: underline dotted;
    }
  }
`;

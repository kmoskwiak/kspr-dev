import { css } from "@emotion/react";
import { theme } from "@kspr-dev/common/theme";

export const headerContainer = css`
  margin: 0 auto;
  max-width: 1100px;
  position: relative;
  border: 1px solid ${theme.one};

  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  .menu {
    align-self: center;
  }
`;

export const headerStyles = css`
  position: relative;
  display: inline-block;
  margin-top: 20px;
  padding-left: 40px;
  transform: scale(0.7);

  @media screen and (min-width: 800px) {
    transform: scale(1);
  }

  .hello {
    position: absolute;
    top: 10px;
    left: -40px;
    font-weight: 700;
    font-size: 40px;
    line-height: 94px;
    color: ${theme.purple};
    display: inline-block;
    transform: rotate(270deg);
    background: -webkit-linear-gradient(0deg, ${theme.blue}, ${theme.purple});
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 74px;
  }

  .job {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
  }
`;

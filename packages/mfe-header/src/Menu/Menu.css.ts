import { css } from "@emotion/react";
import { theme } from "@kspr-dev/common/theme";

export const menu = css`
  display: flex;
  gap: 15px;
  justify-content: end;

  .link {
    display: block;
    text-align: center;
    font-family: "Ubuntu";
    color: #fff;
    text-decoration: none;
    font-weight: normal;
    font-size: 16px;
    padding: 10px 8px;
    border-radius: 8px;

    @media screen and (min-width: 600px) {
      min-width: 120px;
    }

    &.active {
      background: ${theme.blue};
    }

    &:hover {
      background: ${theme.blue}55;
    }
  }
`;

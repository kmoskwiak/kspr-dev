import { css } from "@emotion/react";

export const articleContainer = css`
  display: block;
  text-decoration: none;
  color: #fff;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content max-content 1fr;
  gap: 5px 20px;
  grid-template-areas:
    "aside title"
    "aside info"
    "aside description";
  margin: 20px 0 50px 0;
  max-width: 1000px;

  .image {
    transition: transform 0.2s;
  }

  &:hover .title {
    text-decoration: underline dotted;
  }

  &:hover .image {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px #00000033;
  }

  .title {
    grid-area: title;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  .description {
    font-weight: lighter;
    font-size: 16px;
    line-height: 32px;
    opacity: 0.9;
  }

  .date {
    font-style: normal;
    font-weight: lighter;
    font-size: 12px;
    line-height: 32px;
    color: #b4b4b4;
  }

  .image {
    grid-area: aside;
    align-self: self-start;
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 5px;
    text-align: center;

    img {
      border-radius: 5px;
    }
  }
`;

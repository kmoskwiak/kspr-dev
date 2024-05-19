import { Menu } from "../Menu";
import { headerContainer, headerStyles } from "./Header.css";

export const Header = () => {
  return (
    <div css={headerContainer}>
      <div css={headerStyles}>
        <div className="hello">Hello,</div>
        <div className="name">I’m Kasper</div>
        <div className="job">a software engineer.</div>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

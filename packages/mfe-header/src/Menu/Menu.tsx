import { Link, useLocation } from "react-router-dom";
import { menu } from "./Menu.css";

export const Menu = () => {
  const location = useLocation();
  const links = [
    { to: "/", title: "start" },
    { to: "/articles", title: "articles" },
    { to: "/projects", title: "projects" },
  ];

  return (
    <div css={menu}>
      {links.map((link) => (
        <Link
          className={`link ${location.pathname === link.to ? "active" : ""}`}
          key={link.to}
          to={link.to}
        >
          <span className="title">{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

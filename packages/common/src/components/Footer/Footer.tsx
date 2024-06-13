import { styles } from './Footer.css';

interface FooterProps {
  avatar?: string;
}

export const Footer = ({
  avatar,
  ...props
}: FooterProps) => {

  return (
    <div css={styles}>
      {
        avatar && (
          <div className="avatarContainer">
            <img className="avatar" src={avatar} alt="That's me" />
          </div>
        )
      }
      <div className="description">
        I’m Kasper . Here’s my{" "}
        <a href="https://github.com/kmoskwiak" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/kasper-moskwiak/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

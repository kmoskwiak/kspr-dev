import { useTheme } from '@emotion/react';
import { styles } from './Logo.css';

interface LogoProps {

}


export const Logo = ({
  ...props
}: LogoProps) => {
  const theme = useTheme();
  return (
    <div css={styles(theme)}>
      <div className="hello">Hello,</div>
      <div className="name">I’m Kasper</div>
      <div className="job">a software engineer.</div>
    </div>
  );
};

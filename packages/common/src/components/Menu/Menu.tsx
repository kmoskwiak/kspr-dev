import { Link } from 'react-router-dom';
import { styles } from './Menu.css';

interface Link {
  title: string;
  url: string;
}

interface MenuProps {
  links: Link[];
}

/**
 * Primary UI component for user interaction
 */
export const Menu = ({
  links,
  ...props
}: MenuProps) => {

  return (
    <div {...props} css={styles}>
      {links.map((link) => (
        <Link
          arial-label={link.title}
          className='link'
          key={link.url}
          to={link.url}>
          <span className='text'>
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

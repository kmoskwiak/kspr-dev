import React from 'react';
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
        <a
          arial-label={link.title}
          className='link'
          key={link.url}
          href={link.url}>
          <span className='text'>
            {link.title}
          </span>
        </a>
      ))}
    </div>
  );
};

import { Link } from 'react-router-dom';
import { MenuMobileSelect } from './MenuMobileSelect2';
import { MenuDesktop } from './MenuDesktop';

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
    <>
      <MenuMobileSelect links={links} {...props} />
      <MenuDesktop links={links} {...props} />
    </>
  );
};

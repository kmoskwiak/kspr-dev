import { Link } from 'react-router-dom';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobileSelect } from './MenuMobileSelect2';

interface Link {
  name: string;
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

import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { styles } from './Menu.css';
import { MenuProps } from './Menu.type';

export const MenuDesktop = ({
    links,
    ...props
}: MenuProps) => {
    const theme = useTheme();
    return (
        <div {...props} css={styles(theme)}>
            {links.map((link) => (
                <Link
                    arial-label={link.name}
                    className='link'
                    key={link.url}
                    to={link.url}>
                    <span className='text'>
                        {link.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

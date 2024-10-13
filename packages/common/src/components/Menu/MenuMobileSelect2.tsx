import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from './Menu.type';
import { MenuIcon } from './MenuIcon';
import { mobileDrawerStyles, styles } from './MenuMobileSelect2.css';

export const MenuMobileSelect = ({
    links,
    ...props
}: MenuProps) => {
    const theme = useTheme();
    const [active, setActive] = useState(false);

    const activate = () => {
        setActive(!active);
    }

    return (
        <>
            <div {...props} css={styles(theme)} className={`${active ? 'active' : ''}`}>
                <div className='menu-position'>
                    <button onClick={activate} className='menu-bubble' aria-label='Menu'>
                        <MenuIcon />
                    </button>


                </div>

            </div>
            <div css={mobileDrawerStyles(theme)} className={`${active ? 'active' : ''}`} >
                <div className={`menu-ring ${active ? 'active' : ''}`} style={{
                }}>
                    {links.map((link, index) => (
                        <Link
                            arial-label={link.name}
                            className='link'
                            key={link.url}
                            to={link.url}
                        >
                            <span className='text'>
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

        </>
    );
};

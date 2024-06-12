import { styles } from './MenuMobile.css';
import { MenuProps } from './Menu.type';
import { useRef, useState } from 'react';
import "drag-drop-touch";

export const MenuMobile = ({
    links,
    ...props
}: MenuProps) => {

    const [sliderValue, setSliderValue] = useState(0);
    const positionRef = useRef({ x: 0, y: 0, dragged: false });
    const [active, setActive] = useState(false);

    const calculateRotation = (index: number) => {
        const rotation = 0 - ((index * 45) - sliderValue);
        return rotation;
    }

    const calculateTextPosition = (index: number) => {
        const rotation = calculateRotation(index);
        if (rotation < 0 && rotation >= -20) {
            return -(rotation + 20)
        } else if (rotation <= 20 && rotation > 0) {
            return - (20 - rotation);
        } else if (rotation === 0) {
            return -20;
        } else {
            return 0;
        }
    }

    const onDrag = (e: any) => {
        const y = e.clientY - positionRef.current.y;
        setSliderValue((current) => {
            if (!positionRef.current.dragged) return current;
            const next = current - y;
            if (next > 90) return 90;
            if (next < 0) return 0;
            return next;
        });
        positionRef.current = { ...positionRef.current, x: e.clientX, y: e.clientY };
    }

    const onDragStart = (e: any) => {
        try { navigator.vibrate(200) } catch (e) { };
        console.log(e.movementX, e.movementY, e.clientX, e.clientY);
        positionRef.current = { x: e.clientX, y: e.clientY, dragged: true };
        setActive(true);
    }

    const onDragEnd = (e: any) => {
        positionRef.current = { ...positionRef.current, dragged: false };
        setActive(false);
    }

    const activate = () => {
        setActive(!active);
    }

    return (
        <div {...props} css={styles} onMouseMove={onDrag}>
            <div className='menu-container'>
                <ul className={`menu-ring ${active ? 'active' : ''}`} style={{
                }}>
                    {links.map((link, index) => (
                        <li
                            arial-label={link.title}
                            className='link'
                            key={link.url}
                            data-to={link.url}
                            style={{
                                transform: `rotate(${calculateRotation(index)}deg)`
                            }}
                        >
                            <span className='text'
                                style={{
                                    filter: `blur(${1 + (calculateTextPosition(index) / 25)}px)`,
                                    opacity: `${80 - 5 * calculateTextPosition(index)}%`,
                                    transform: `translateX(${calculateTextPosition(index)}px) scale(${100 - calculateTextPosition(index)}%)`
                                }}
                            >
                                {link.title}
                            </span>
                        </li>
                    ))}
                </ul>
                <div onClick={activate} draggable className='menu-bubble' onDrag={onDrag} onDragStart={onDragStart} onDragEnd={onDragEnd}>

                </div>
            </div>
        </div>
    );
};

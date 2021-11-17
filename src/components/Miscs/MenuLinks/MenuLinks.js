import React from 'react';
import { useTrail, animated } from 'react-spring';

const MenuLinkList = [
    {
        index: '1',
        href: '',
        linkName: 'Home',
    },
    {
        index: '2',
        href: '',
        linkName: 'About',
    },
    {
        index: '3',
        href: '',
        linkName: 'Services',
    },
    {
        index: '4',
        href: '',
        linkName: 'Contact',
    },
];

const MenuLinks = (props) => {
    const config = { mass: 10, tension: 2000, friction: 500, };
    const slideFadeAnimation = useTrail(MenuLinkList.length, {
        from: {
            opacity: 0,
            transform: "translate3d(0,-80px,0)",
        },
        to: {
            opacity: 1,
            transform: "translate3d(0,0px,0)",
        },
        config,
    });

    return (
        <>
            {slideFadeAnimation.map((spring, index) => {
                return (
                    <animated.div
                        key={index}
                        style={{ ...spring }}
                    >
                        <MenuLink
                            href={MenuLinkList[index].link}
                            linkName={MenuLinkList[index].linkName}
                            {...props}
                        />
                    </animated.div>
                );
            })}
        </>
    );
}

const MenuLink = props => {
    const { link, setShowMediaIcons, linkName } = props;

    return (
        <>
            <li>
                <a
                    href={link}
                    onClick={() => {
                        if (setShowMediaIcons)
                            setShowMediaIcons(false)
                    }}
                >
                    {linkName}
                </a>
            </li>
        </>
    );
}

export default MenuLinks;
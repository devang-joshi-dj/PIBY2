import React from 'react';
import imagesPath from '../../Miscs/imagesPath';
import setUnactiveContent from '../../Miscs/setUnactiveContent';
import hidePlayArea from '../../Miscs/hidePlayArea';
import { animateScroll as scroll } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

const Logo = () => {
    const config = { mass: 10, tension: 2000, friction: 500, };
    const slideFadeAnimation = useSpring({
        from: {
            opacity: 0,
            transform: "translate3d(0,80px,0)",
        },
        to: {
            opacity: 1,
            transform: "translate3d(0,0px,0)",
        },
        config,
    });

    return (
        <>
            <animated.div
                className="logo"
                style={slideFadeAnimation}
            >
                <img
                    src={`${imagesPath}/logo.png`}
                    alt="PiBy2 Logo"
                    onClick={() => {
                        setUnactiveContent();
                        hidePlayArea();
                        scroll.scrollToTop();
                        document.title = 'Pi/2';
                    }}
                />
            </animated.div>
        </>
    );
}

export default Logo;
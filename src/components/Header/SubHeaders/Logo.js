import React from 'react';
import handleLogoOnClick from '../../Miscs/handleLogoOnClick';
import { useSpring, animated } from 'react-spring';

const Logo = props => {
    const { setDisplaySubPlayArea } = props;
    const imagesPath = process.env.PUBLIC_URL + "/images/";

    // for animation
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
                        handleLogoOnClick();
                        setDisplaySubPlayArea(null);
                    }}
                />
            </animated.div>
        </>
    );
}

export default Logo;
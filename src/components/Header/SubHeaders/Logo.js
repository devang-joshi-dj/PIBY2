import React from 'react';
import imagesPath from '../../config';
import { animateScroll as scroll } from 'react-scroll';
import LightSpeed from 'react-reveal/LightSpeed';

const Logo = () => {
    return (
        <>
            <div className="logo">
                <LightSpeed left>
                    <img
                        src={`${imagesPath}/logo.png`}
                        alt="PiBy2 Logo"
                        onClick={() => scroll.scrollToTop()}
                    />
                </LightSpeed>
            </div>
        </>
    );
}

export default Logo;
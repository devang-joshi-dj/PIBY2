import React from 'react';
import imagesPath from '../../config';
import { animateScroll as scroll } from 'react-scroll';

const Logo = () => {
    return (
        <>
            <div className="logo">
                <img
                    src={`${imagesPath}/logo.png`}
                    alt="PiBy2 Logo"
                    onClick={() => scroll.scrollToTop()}
                />
            </div>
        </>
    );
}

export default Logo;
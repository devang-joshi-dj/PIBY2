import React from 'react';
import imagesPath from '../../config';
import { animateScroll as scroll } from 'react-scroll';
import Slide from 'react-reveal/Slide';

const Logo = () => {
    return (
        <>
            <div className="logo">
                <Slide left cascade>
                    <img
                        src={`${imagesPath}/logo.png`}
                        alt="PiBy2 Logo"
                        onClick={() => scroll.scrollToTop()}
                    />
                </Slide>
            </div>
        </>
    );
}

export default Logo;
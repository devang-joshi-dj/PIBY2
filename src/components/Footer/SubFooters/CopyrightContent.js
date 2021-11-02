import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import LightSpeed from 'react-reveal/LightSpeed';

const CopyrightContent = () => {
    return (
        <>
            <LightSpeed left>
                <div className="copyright-content">
                    <p>
                        Copyright &copy;2021
                        <span onClick={() => scroll.scrollToTop()}>
                            PIBY2
                        </span>
                    </p>
                </div>
            </LightSpeed>
        </>
    );
}

export default CopyrightContent;
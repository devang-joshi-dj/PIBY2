import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const CopyrightContent = () => {
    return (
        <>
            <div className="copyright-content">
                <p>
                    Copyright &copy;2021
                    <span onClick={() => scroll.scrollToTop()}>
                        PIBY2
                    </span>
                </p>
            </div>
        </>
    );
}

export default CopyrightContent;
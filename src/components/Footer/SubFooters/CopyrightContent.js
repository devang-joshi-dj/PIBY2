import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const CopyrightContent = () => {

    const hidePlayArea = () => {
        const getPlayArea = document.querySelector('.play-area');
        getPlayArea.style.display = 'none';
    }

    return (
        <>
            <div className="copyright-content">
                <p>
                    Copyright &copy;2021
                    <span onClick={() => {
                        hidePlayArea();
                        scroll.scrollToTop();
                        document.title = 'Pi/2';
                    }}>
                        PIBY2
                    </span>
                </p>
            </div>
        </>
    );
}

export default CopyrightContent;
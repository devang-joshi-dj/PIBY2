import React from 'react';
import setUnactiveContent from '../../Miscs/setUnactiveContent';
import hidePlayArea from '../../Miscs/hidePlayArea';
import { animateScroll as scroll } from 'react-scroll';

const CopyrightContent = () => {
    return (
        <>
            <div className="copyright-content">
                <p>
                    Copyright &copy;2021
                    <span onClick={() => {
                        setUnactiveContent();
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
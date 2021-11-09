import React from 'react';
import handleLogoOnClick from '../../Miscs/handleLogoOnClick';

const CopyrightContent = (props) => {
    return (
        <>
            <div className="copyright-content">
                <p>
                    Copyright &copy;2021
                    <span onClick={() => {
                        handleLogoOnClick();
                        props.setDisplaySubPlayArea(null);
                    }}>
                        PIBY2
                    </span>
                </p>
            </div>
        </>
    );
}

export default CopyrightContent;
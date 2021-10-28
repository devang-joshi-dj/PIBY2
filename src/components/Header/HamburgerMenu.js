import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = (props) => {
    console.log(props);
    return (
        <>
            <div className="hamburger-menu">
                <div onClick={() => props.setShowMediaIcons(!props.showMediaIcons)}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </>
    );
}

export default HamburgerMenu
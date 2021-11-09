import React, { useState } from 'react';
import './header.css';
import Logo from './SubHeaders/Logo';
import HeaderMenuLinks from './SubHeaders/HeaderMenuLinks';
import HeaderSocialMedia from './SubHeaders/HeaderSocialMedia';

const Header = (props) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <header>
                <Logo
                    setDisplaySubPlayArea={props.setDisplaySubPlayArea}
                />
                <HeaderMenuLinks
                    showMediaIcons={showMediaIcons}
                    setShowMediaIcons={setShowMediaIcons}
                />
                <HeaderSocialMedia
                    showMediaIcons={showMediaIcons}
                    setShowMediaIcons={setShowMediaIcons}
                />
            </header>
        </>
    );
}

export default Header;
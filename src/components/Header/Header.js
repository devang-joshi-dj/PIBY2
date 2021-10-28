import React, { useState } from 'react';
import './header.css';
import Logo from './SubHeaders/Logo';
import MenuLinks from './SubHeaders/HeaderMenuLinks';
import SocialMedia from './SubHeaders/HeaderSocialMedia';

const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <header>
                <Logo />
                <MenuLinks
                    showMediaIcons={showMediaIcons}
                    setShowMediaIcons={setShowMediaIcons}
                />
                <SocialMedia
                    showMediaIcons={showMediaIcons}
                    setShowMediaIcons={setShowMediaIcons}
                />
            </header>
        </>
    );
}

export default Header;
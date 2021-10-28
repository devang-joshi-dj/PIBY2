import React, { useState } from 'react';
import './header.css';
import Logo from './Logo';
import MenuLink from './MenuLink';
import SocialMedia from './SocialMedia';

const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <header>
                <Logo />
                <MenuLink
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
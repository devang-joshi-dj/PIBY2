import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import SocialMediaCluster from '../../Miscs/SocialMediaCluster/SocialMediaCluster';

const HeaderSocialMedia = props => {
    const { showMediaIcons, setShowMediaIcons } = props;

    return (
        <>
            <div className="social-media">
                <ul className="social-media-desktop">
                    <SocialMediaCluster />
                </ul>
                <HamburgerMenu
                    showMediaIcons={showMediaIcons}
                    setShowMediaIcons={setShowMediaIcons}
                />
            </div>
        </>
    );
}

export default HeaderSocialMedia;
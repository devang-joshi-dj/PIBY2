import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';

const HeaderSocialMedia = (props) => {
    return (
        <>
            <div className="social-media">
                <ul className="social-media-desktop">
                    <SocialMedia
                        link="#"
                        iconsWithClassName={<FaFacebookSquare className="facebook" />}
                    />
                    <SocialMedia
                        link="#"
                        iconsWithClassName={<FaInstagramSquare className="instagram" />}
                    />
                    <SocialMedia
                        link="#"
                        iconsWithClassName={<FaLinkedin className="linkedin" />}
                    />
                    <SocialMedia
                        link="#"
                        iconsWithClassName={<FaGithubSquare className="github" />}
                    />
                </ul>

                <HamburgerMenu
                    showMediaIcons={props.showMediaIcons}
                    setShowMediaIcons={props.setShowMediaIcons}
                />
            </div>
        </>
    );
}

const SocialMedia = (props) => {
    return (
        <>
            <li>
                <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.iconsWithClassName}
                </a>
            </li>
        </>
    );
}

export default HeaderSocialMedia;
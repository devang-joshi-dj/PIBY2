import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';

const SocialMedia = (props) => {
    return (
        <>
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare className="facebook" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagramSquare className="instagram" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare className="github" />
                        </a>
                    </li>
                </ul>


                <HamburgerMenu
                    showMediaIcons={props.showMediaIcons}
                    setShowMediaIcons={props.setShowMediaIcons}
                />
            </div>
        </>
    );
}

export default SocialMedia;
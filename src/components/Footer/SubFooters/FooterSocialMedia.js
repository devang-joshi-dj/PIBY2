import React from 'react';
import { FiMail } from 'react-icons/fi';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';

const FooterSocialMedia = () => {
    return (
        <>
            <ul className="footer-social-media">
                <SocialMedia
                    link="#"
                    iconsWithClassName={<FiMail className="mail" />}
                />
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

export default FooterSocialMedia;
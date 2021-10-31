import React from 'react';
import { IoMdMailOpen } from 'react-icons/io';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';

const FooterSocialMedia = () => {
    return (
        <>
            <div className="footer-social-media">
                <ul>
                    <SocialMedia
                        link="#"
                        iconsWithClassName={<IoMdMailOpen className="mail" />}
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

export default FooterSocialMedia;
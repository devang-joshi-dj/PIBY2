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
                <li>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiMail className="mail" />
                    </a>
                </li>
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
        </>
    );
}

export default FooterSocialMedia;
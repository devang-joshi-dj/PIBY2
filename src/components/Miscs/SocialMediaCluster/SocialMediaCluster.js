import React from 'react';
import './social-media-cluster.css';
import { IoMdMailOpen } from 'react-icons/io';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';

const SocialMediaCluster = () => {
    return (
        <>
            <SocialMedia
                link="mailto:devangjoshi11@gmail.com"
                iconsWithClassName={<IoMdMailOpen className="mail" />}
            />
            <SocialMedia
                link="https://www.facebook.com/profile.php?id=100007049146869"
                iconsWithClassName={<FaFacebookSquare className="facebook" />}
            />
            <SocialMedia
                link="https://www.instagram.com/devangjoshi007/"
                iconsWithClassName={<FaInstagramSquare className="instagram" />}
            />
            <SocialMedia
                link="https://www.linkedin.com/in/devang-j-5084ab10b/"
                iconsWithClassName={<FaLinkedin className="linkedin" />}
            />
            <SocialMedia
                link="https://github.com/devang-joshi-dj"
                iconsWithClassName={<FaGithubSquare className="github" />}
            />
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

export default SocialMediaCluster;
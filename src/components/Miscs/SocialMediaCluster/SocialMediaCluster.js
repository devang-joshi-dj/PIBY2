import React from 'react';
import './social-media-cluster.css';
import { IoMdMailOpen } from 'react-icons/io';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';
import Flip from 'react-reveal/Flip';

const socialMediaClusterList = [
    {
        index: '1',
        link: 'mailto:devangjoshi11@gmail.com',
        iconWithClassName: <IoMdMailOpen className="mail" />,
    },
    {
        index: '2',
        link: 'https://www.facebook.com/profile.php?id=100007049146869',
        iconWithClassName: <FaFacebookSquare className="facebook" />,
    },
    {
        index: '3',
        link: 'https://www.instagram.com/devangjoshi007/',
        iconWithClassName: <FaInstagramSquare className="instagram" />,
    },
    {
        index: '4',
        link: 'https://www.linkedin.com/in/devang-j-5084ab10b/',
        iconWithClassName: <FaLinkedin className="linkedin" />,
    },
    {
        index: '5',
        link: 'https://github.com/devang-joshi-dj',
        iconWithClassName: <FaGithubSquare className="github" />,
    },
];

const SocialMediaCluster = () => {
    return (
        <>
            {socialMediaClusterList.map(socialMedia => (
                <SocialMedia
                    key={socialMedia.index}
                    link={socialMedia.link}
                    iconsWithClassName={socialMedia.iconWithClassName}
                />
            ))}
        </>
    );
}

const SocialMedia = (props) => {
    return (
        <>
            <li>
                <Flip right cascade>
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.iconsWithClassName}
                    </a>
                </Flip>
            </li>
        </>
    );
}

export default SocialMediaCluster;
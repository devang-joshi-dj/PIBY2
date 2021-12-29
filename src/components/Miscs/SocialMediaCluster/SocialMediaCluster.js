import React from 'react';
import './social-media-cluster.css';
import { IoMdMailOpen } from 'react-icons/io';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useTrail, animated } from 'react-spring';

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
		link: 'https://github.com/devang-joshi-dj/PIBY2',
		iconWithClassName: <FaGithubSquare className="github" />,
	},
];

const SocialMediaCluster = () => {
	// for animation
	const config = { mass: 10, tension: 2000, friction: 500 };
	const slideFadeAnimation = useTrail(socialMediaClusterList.length, {
		from: {
			opacity: 0,
			transform: 'translate3d(80px,0,0)',
		},
		to: {
			opacity: 1,
			transform: 'translate3d(0,0px,0)',
		},
		config,
	});

	return (
		<>
			{slideFadeAnimation.map((spring, index) => {
				return (
					<animated.div key={index} style={{ ...spring }}>
						<SocialMedia
							key={socialMediaClusterList[index].index}
							link={socialMediaClusterList[index].link}
							iconsWithClassName={socialMediaClusterList[index].iconWithClassName}
						/>
					</animated.div>
				);
			})}
		</>
	);
};

const SocialMedia = props => {
	const { link, iconsWithClassName } = props;

	return (
		<>
			<li>
				<a href={link} target="_blank" rel="noopener noreferrer">
					{iconsWithClassName}
				</a>
			</li>
		</>
	);
};

export default SocialMediaCluster;

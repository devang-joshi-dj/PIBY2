import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = props => {
	const { setShowMediaIcons, showMediaIcons } = props;

	return (
		<>
			<div className="hamburger-menu">
				<div onClick={() => setShowMediaIcons(!showMediaIcons)}>
					<GiHamburgerMenu />
				</div>
			</div>
		</>
	);
};

export default HamburgerMenu;

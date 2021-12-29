import React from 'react';
import './heading.css';
import { useSpring, animated } from 'react-spring';

const Heading = props => {
	const { children } = props;

	// for animation
	const config = { duration: 1000 };
	const fadeAnimation = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
		delay: 500,
		config,
	});

	return (
		<>
			<animated.h1 className="heading" style={fadeAnimation}>
				{children}
			</animated.h1>
		</>
	);
};

export default Heading;

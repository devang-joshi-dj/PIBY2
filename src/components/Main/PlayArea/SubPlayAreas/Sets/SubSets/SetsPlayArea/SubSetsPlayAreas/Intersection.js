import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import IntersectionSymbol from './Symbols/IntersectionSymbol';

const Intersection = props => {
	const { firstFinalSetArray, secondFinalSetArray } = props;

	const getIntersection = () => {
		// function to get intersection of firstFinalSetArray and secondFinalSetArray

		const printIntersectedSet = () => {
			// function to print intersection of firstFinalSetArray and secondFinalSetArray

			const intersectedSet = firstFinalSetArray.filter(value =>
				secondFinalSetArray.includes(value)
			); // filtering common elements from both sets

			return intersectedSet.length !== 0 ? (
				<>{`{${intersectedSet.join(', ')}}`}</>
			) : (
				<>
					<PhiSymbol />
				</>
			);
		};

		return (
			<>
				<div className="result">
					<div className="label">
						A
						<IntersectionSymbol />
						B:
					</div>
					{printIntersectedSet()}
				</div>
			</>
		);
	};

	return (
		<>
			<div className="intersection">
				<h2>Intersection</h2>
				{getIntersection()}
			</div>
		</>
	);
};

export default Intersection;

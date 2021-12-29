import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import UnionSymbol from './Symbols/UnionSymbol';

const Union = props => {
	const { firstFinalSetArray, secondFinalSetArray } = props;

	const getUnion = () => {
		// function to get union of firstFinalSetArray and secondFinalSetArray

		const printUnionSet = () => {
			// function to print union of firstFinalSetArray and secondFinalSetArray

			const unionSet = [...new Set([...firstFinalSetArray, ...secondFinalSetArray])];
			// merging all elements from both sets and removing duplicate values

			return unionSet.length !== 0 ? (
				<>{`{${unionSet.join(', ')}}`}</>
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
						<UnionSymbol />
						B:
					</div>
					{printUnionSet()}
				</div>
			</>
		);
	};

	return (
		<>
			<div className="union">
				<h2>Union</h2>
				{getUnion()}
			</div>
		</>
	);
};

export default Union;

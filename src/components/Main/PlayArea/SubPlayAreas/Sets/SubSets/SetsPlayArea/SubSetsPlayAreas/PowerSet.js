import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';

const PowerSet = props => {
	const { firstFinalSetArray, secondFinalSetArray } = props;

	const getPowerSet = () => {
		// function to get powerset of firstFinalSetArray and secondFinalSetArray

		const printFirstPowerSet = () => {
			// function to print powerset of firstFinalSetArray

			const powerSet = [[]];
			for (var i = 0; i < firstFinalSetArray.length; i++) {
				var len = powerSet.length;
				for (var j = 0; j < len; j++) {
					powerSet.push(powerSet[j].concat(firstFinalSetArray[i]));
				}
			} // getting the powerset of first set

			return powerSet.length !== 1 ? (
				<>{`{${powerSet.map(array => `{${array.join(', ')}}`).join(', ')}}`.replace('{}', '∅')}</>
			) : (
				<>{<PhiSymbol />}</>
			);
		};

		const printSecondPowerSet = () => {
			// function to print powerset of secondFinalSetArray

			const powerSet = [[]];
			for (var i = 0; i < secondFinalSetArray.length; i++) {
				var len = powerSet.length;
				for (var j = 0; j < len; j++) {
					powerSet.push(powerSet[j].concat(secondFinalSetArray[i]));
				}
			} // getting the powerset of first set

			return powerSet.length !== 1 ? (
				<>{`{${powerSet.map(array => `{${array.join(', ')}}`).join(', ')}}`.replace('{}', '∅')}</>
			) : (
				<>{<PhiSymbol />}</>
			);
		};

		return (
			<>
				<div className="result">
					<div className="label">P(A):</div>
					{printFirstPowerSet()}
				</div>
				<div className="result">
					<div className="label">P(B):</div>
					{printSecondPowerSet()}
				</div>
			</>
		);
	};

	return (
		<>
			<div className="powerset">
				<h2>PowerSet</h2>
				{getPowerSet()}
			</div>
		</>
	);
};

export default PowerSet;

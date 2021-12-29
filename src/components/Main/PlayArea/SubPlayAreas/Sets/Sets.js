import React, { useState } from 'react';
import './sets.css';
import Heading from '../../../../Miscs/Heading/Heading';
import Inputs from './SubSets/Inputs/Inputs';
import SetsPlayArea from './SubSets/SetsPlayArea/SetsPlayArea';

const Sets = () => {
	const [firstInputValue, setFirstInputValue] = useState('');
	const [secondInputValue, setSecondInputValue] = useState('');
	const [firstFinalSetArray, setFirstFinalSetArray] = useState([]);
	const [secondFinalSetArray, setSecondFinalSetArray] = useState([]);

	return (
		<>
			<div className="sets">
				<Heading>Sets</Heading>
				<Inputs
					firstInputValue={firstInputValue}
					setFirstInputValue={setFirstInputValue}
					secondInputValue={secondInputValue}
					setSecondInputValue={setSecondInputValue}
					setFirstFinalSetArray={setFirstFinalSetArray}
					setSecondFinalSetArray={setSecondFinalSetArray}
				/>
				<SetsPlayArea
					firstFinalSetArray={firstFinalSetArray}
					secondFinalSetArray={secondFinalSetArray}
				/>
			</div>
		</>
	);
};

export default Sets;

import React from 'react';
import './select.css';
import Select from 'react-select';

const SelectComponent = props => {
	const { setSelectedValue, options, selectedValue } = props;

	const handleOperationChange = e => {
		// function to handle the operations when the value is changed in select component

		setSelectedValue(e.value);
	};

	return (
		<>
			<div className="select">
				<label htmlFor="select">Select The Desired Operation:</label>
				<Select
					id="select"
					options={options}
					value={options.find(obj => obj.value === selectedValue)}
					onChange={handleOperationChange}
				/>
			</div>
		</>
	);
};

export default SelectComponent;

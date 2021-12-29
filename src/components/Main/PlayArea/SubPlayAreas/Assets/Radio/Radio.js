import React from 'react';
import './radio.css';

const Radio = props => {
	const { radioOptions, radioName, radioOption, setOption } = props;

	const handleChange = e => {
		// function to handle the operations when the value is changed in radio button

		setOption(e.target.id);
	};

	return (
		<>
			<div className="radio-group">
				{radioOptions.map((option, index) => {
					return (
						<label key={index}>
							<input
								type="radio"
								id={option}
								name={radioName}
								value={option}
								checked={option === radioOption}
								onChange={handleChange}
							/>
							<span>{option}</span>
						</label>
					);
				})}
			</div>
		</>
	);
};

export default Radio;

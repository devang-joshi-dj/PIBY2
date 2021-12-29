import React from 'react';

const DeterminantSymbol = props => {
	return (
		<>
			<div className="determinant-symbol">|{props.children}|</div>
		</>
	);
};

export default DeterminantSymbol;

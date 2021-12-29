import React from 'react';

const MinorsSymbol = props => {
	return (
		<>
			<div className="minors-symbol">M({props.children})</div>
		</>
	);
};

export default MinorsSymbol;

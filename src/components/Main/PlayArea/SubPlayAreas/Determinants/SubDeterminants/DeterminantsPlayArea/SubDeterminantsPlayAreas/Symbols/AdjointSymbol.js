import React from 'react';

const AdjointSymbol = props => {
	return (
		<>
			<div className="adjoint-symbol">Adj({props.children})</div>
		</>
	);
};

export default AdjointSymbol;

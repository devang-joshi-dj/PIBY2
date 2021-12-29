import React, { useState } from 'react';
import './matrices.css';
import Heading from '../../../../Miscs/Heading/Heading';
import Selects from './SubMatrices/Selects/Selects';
import MatricesPlayAreas from './SubMatrices/MatricesPlayArea/MatricesPlayArea';

const Matrices = () => {
	const [rowsSelectedValue, setRowsSelectedValue] = useState('');
	const [columnsSelectedValue, setColumnsSelectedValue] = useState('');

	const renderPlayArea = () => {
		// function to render PlayArea when rowsSelectedValue and columnsSelectedValue both are set to any value

		return rowsSelectedValue && columnsSelectedValue ? (
			<>
				<MatricesPlayAreas
					rowsSelectedValue={rowsSelectedValue}
					columnsSelectedValue={columnsSelectedValue}
				/>
			</>
		) : null;
	};

	return (
		<>
			<div className="matrices">
				<Heading>Matrices</Heading>
				<Selects
					rowsSelectedValue={rowsSelectedValue}
					setRowsSelectedValue={setRowsSelectedValue}
					columnsSelectedValue={columnsSelectedValue}
					setColumnsSelectedValue={setColumnsSelectedValue}
				/>
				{renderPlayArea()}
			</div>
		</>
	);
};

export default Matrices;

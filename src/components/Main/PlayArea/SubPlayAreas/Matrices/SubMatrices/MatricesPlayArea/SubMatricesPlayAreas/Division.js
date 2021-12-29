import React, { useState, useEffect } from 'react';
import Input from '../../../../Assets/Input/Input';
import DivisionSymbol from './Symbols/DivisionSymbol';

const Division = props => {
	const { matrix, rowsSelectedValue, columnsSelectedValue } = props;
	const [constantValue, setConstantValue] = useState(0);
	const [finalMatrixStructure, setFinalMatrixStructure] = useState([]);

	useEffect(() => {
		// function to set finalMatrixStructure when matrix structure gets changed

		return rowsSelectedValue && columnsSelectedValue
			? setFinalMatrixStructure(
					Array.from({ length: rowsSelectedValue }, () =>
						Array.from({ length: columnsSelectedValue }, () => '')
					)
			  )
			: null;
	}, [rowsSelectedValue, columnsSelectedValue]);

	const getMatrixDivision = () => {
		// function to get Constant To Matrix Division

		const printMatrixDivision = () => {
			// function to print Constant To Matrix Division

			let finalMatrix = finalMatrixStructure;
			for (let i = 0; i < rowsSelectedValue; i++)
				for (let j = 0; j < columnsSelectedValue; j++) {
					finalMatrix[i][j] = isNaN(Number(matrix[i][j]) / Number(constantValue))
						? 'Undefined'
						: Number(matrix[i][j]) / Number(constantValue);
				}

			return (
				<>
					<div className="result">
						<div className="label">
							A
							<DivisionSymbol />
							k:
						</div>
						<div className="print-matrix">
							{
								<div className="print-matrix-row">
									{finalMatrix.map((row, rowIndex) => (
										<div key={rowIndex} className="print-matrix-column">
											{row.map((column, columnIndex) => (
												<div key={columnIndex}>{finalMatrix[rowIndex][columnIndex]}</div>
											))}
										</div>
									))}
								</div>
							}
						</div>
					</div>
				</>
			);
		};

		return (
			<>
				<Input placeholder="0" setValue={setConstantValue} filter={true}>
					Input your Constant:
				</Input>
				{matrix.length &&
				finalMatrixStructure.length &&
				matrix.length === Number(rowsSelectedValue) &&
				finalMatrixStructure.length === Number(rowsSelectedValue)
					? printMatrixDivision()
					: null}
			</>
		);
	};

	return (
		<>
			<div className="division">
				<h2>Division</h2>
				{getMatrixDivision()}
			</div>
		</>
	);
};

export default Division;

import React, { useState, useEffect } from 'react';
import Matrix from '../../../../Assets/Matrix/Matrix';
import DifferenceSymbol from './Symbols/DifferenceSymbol';

const Difference = props => {
	const { matrix, rowsSelectedValue, columnsSelectedValue } = props;
	const [secondMatrix, setSecondMatrix] = useState([]);
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

	const getMatrixDifference = () => {
		// function to get difference of firstMatrix and secondMatrix

		const printADifferenceBMatrix = () => {
			// function to print difference of firstMatrix and secondMatrix

			let finalMatrix;
			for (let i = 0; i < rowsSelectedValue; i++)
				for (let j = 0; j < columnsSelectedValue; j++) {
					finalMatrix = finalMatrixStructure;
					finalMatrix[i][j] = Number(matrix[i][j]) - Number(secondMatrix[i][j]);
				}

			return (
				<>
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
				</>
			);
		};

		const printBDifferenceAMatrix = () => {
			// function to print difference of secondMatrix and firstMatrix

			let finalMatrix = finalMatrixStructure;
			for (let i = 0; i < rowsSelectedValue; i++)
				for (let j = 0; j < columnsSelectedValue; j++) {
					finalMatrix[i][j] = Number(secondMatrix[i][j]) - Number(matrix[i][j]);
				}

			return (
				<>
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
				</>
			);
		};

		return (
			<>
				<div className="matrix-input">
					<div className="label">Input your 2nd Matrix:</div>
					<Matrix
						matrix={secondMatrix}
						setMatrix={setSecondMatrix}
						rowsSelectedValue={rowsSelectedValue}
						columnsSelectedValue={columnsSelectedValue}
					/>
				</div>
				<div className="result">
					<div className="label">
						A
						<DifferenceSymbol />
						B:
					</div>
					{matrix.length &&
					secondMatrix.length &&
					matrix.length === Number(rowsSelectedValue) &&
					secondMatrix.length === Number(rowsSelectedValue)
						? printADifferenceBMatrix()
						: null}
				</div>
				<div className="result">
					<div className="label">
						B
						<DifferenceSymbol />
						A:
					</div>
					{matrix.length &&
					secondMatrix.length &&
					matrix.length === Number(rowsSelectedValue) &&
					secondMatrix.length === Number(rowsSelectedValue)
						? printBDifferenceAMatrix()
						: null}
				</div>
			</>
		);
	};

	return (
		<>
			<div className="difference">
				<h2>Difference</h2>
				{getMatrixDifference()}
			</div>
		</>
	);
};

export default Difference;

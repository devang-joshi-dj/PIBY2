import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Input from '../../../../Assets/Input/Input';

const Division = props => {
	const { matrix, rowsAndColumnsSelectedValue } = props;
	const [currentRowOrColumnNum, setCurrentRowOrColumnNum] = useState();
	const [rowsAndColumnsNumOptions, setRowsAndColumnsNumOptions] = useState();
	const [inputValue, setInputValue] = useState(0);

	const [currentRowOrColumn, setCurrentRowOrColumn] = useState();
	const rowOrColumnSelectOption = [
		{ value: 'Row', label: 'Row' },
		{ value: 'Column', label: 'Column' },
	];

	const [finalMatrixStructure, setFinalMatrixStructure] = useState([]);

	useEffect(() => {
		return rowsAndColumnsSelectedValue
			? setFinalMatrixStructure(
					Array.from({ length: rowsAndColumnsSelectedValue }, () =>
						Array.from({ length: rowsAndColumnsSelectedValue }, () => '')
					)
			  )
			: null;
	}, [rowsAndColumnsSelectedValue]);

	useEffect(() => {
		// function to set rowsAndColumnsNumOptions accordingly with rowsAndColumnsSelectedValue even when it changes

		const rowsAndColumnsNumOptionsLabelsTemplate = ['1st', '2nd', '3rd', '4th', '5th'];

		let rowsAndColumnsNumOptions = [];
		for (let i = 1; i <= rowsAndColumnsSelectedValue; i++) {
			rowsAndColumnsNumOptions = rowsAndColumnsNumOptions.concat({
				value: `${i}`,
				label: `${rowsAndColumnsNumOptionsLabelsTemplate[i - 1]}`,
			});
		}
		setRowsAndColumnsNumOptions(rowsAndColumnsNumOptions);
	}, [rowsAndColumnsSelectedValue]);

	const renderInput = () => {
		// function to render Input when division option is selected

		return (
			<>
				<Input placeholder="0" setValue={setInputValue} filter={true}>
					Input your Constant:
				</Input>
			</>
		);
	};

	const getDivision = () => {
		// function to get division of determinant

		const printDivision = () => {
			// function to print division of determinant

			let finalMatrix;
			switch (currentRowOrColumn) {
				case 'Row':
					finalMatrix = finalMatrixStructure;
					for (let i = 0; i < rowsAndColumnsSelectedValue; i++) {
						for (let j = 0; j < rowsAndColumnsSelectedValue; j++) {
							i === currentRowOrColumnNum - 1
								? (finalMatrix[i][j] = isNaN(Number(matrix[i][j]) / Number(inputValue))
										? 'Undefined'
										: Number(matrix[i][j]) / Number(inputValue))
								: (finalMatrix[i][j] = Number(matrix[i][j]));
						}
					}
					break;
				case 'Column':
					finalMatrix = finalMatrixStructure;
					for (let i = 0; i < rowsAndColumnsSelectedValue; i++) {
						for (let j = 0; j < rowsAndColumnsSelectedValue; j++) {
							j === currentRowOrColumnNum - 1
								? (finalMatrix[i][j] = isNaN(Number(matrix[i][j]) / Number(inputValue))
										? 'Undefined'
										: Number(matrix[i][j]) / Number(inputValue))
								: (finalMatrix[i][j] = Number(matrix[i][j]));
						}
					}
					break;
				default:
					break;
			}

			return (
				<>
					<div className="result">
						<div className="label">A/k:</div>
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

		const printSelects = () => {
			const handleRowValueChange = e => {
				// function to handle the value of currentRowOrColumnNum when the value is changed in select component

				setCurrentRowOrColumnNum(e.value);
			};

			const handleColumnValueChange = e => {
				// function to handle the value of currentRowOrColumn when the value is changed in select component

				setCurrentRowOrColumn(e.value);
			};

			return (
				<>
					<div className="info">Specify with what you would do division?</div>
					<div className="matrix-input">
						<Select
							id="select"
							options={rowsAndColumnsNumOptions}
							value={rowsAndColumnsNumOptions.find(obj => obj.value === currentRowOrColumnNum)}
							onChange={handleRowValueChange}
						/>
						<Select
							id="select"
							options={rowOrColumnSelectOption}
							value={rowOrColumnSelectOption.find(obj => obj.value === currentRowOrColumn)}
							onChange={handleColumnValueChange}
						/>
					</div>
				</>
			);
		};

		return (
			<>
				{renderInput()}
				{rowsAndColumnsNumOptions ? printSelects() : null}
				{currentRowOrColumnNum && currentRowOrColumn
					? matrix.length &&
					  matrix.length === Number(rowsAndColumnsSelectedValue) &&
					  finalMatrixStructure.length &&
					  finalMatrixStructure.length === Number(rowsAndColumnsSelectedValue)
						? printDivision()
						: null
					: null}
			</>
		);
	};

	return (
		<>
			<div className="division">
				<h2>Division</h2>
				{getDivision()}
			</div>
		</>
	);
};

export default Division;

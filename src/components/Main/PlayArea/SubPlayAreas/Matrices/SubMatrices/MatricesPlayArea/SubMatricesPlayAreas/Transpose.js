import React from 'react';

const Transpose = props => {
	const { matrix, rowsSelectedValue } = props;

	const getMatrixTranspose = () => {
		// function to get transpose of matrix

		const printMatrixTranspose = () => {
			// function to print transpose of matrix

			const finalMatrix = matrix[0].map((_, colIndex) => matrix.map(row => Number(row[colIndex])));

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
				<div className="result">
					<div className="label">A':</div>
					{matrix.length && matrix.length === Number(rowsSelectedValue)
						? printMatrixTranspose()
						: null}
				</div>
			</>
		);
	};

	return (
		<>
			<div className="transpose">
				<h2>Transpose</h2>
				{getMatrixTranspose()}
			</div>
		</>
	);
};

export default Transpose;

import React from 'react';

const Transpose = props => {
    const { matrix, rowsSelectedValue } = props;

    const getMatrixAddition = () => {
        // function to get transpose of matrix

        const printMatrixAddition = () => {
            // function to print transpose of matrix

            // for (let i = 0; i < rowsSelectedValue; i++)
            //     for (let j = 0; j < columnsSelectedValue; j++) {
            //         finalMatrix = finalMatrixStructure;
            //         finalMatrix[i][j] = Number(matrix[i][j])
            //     }

            const finalMatrix = matrix[0].map((_, colIndex) => matrix.map(row => Number(row[colIndex])));

            return (
                <>
                    <div className="print-matrix">
                        {
                            <div className="print-matrix-row">
                                {
                                    finalMatrix.map((row, rowIndex) => (
                                        <div key={rowIndex} className="print-matrix-column">
                                            {row.map((column, columnIndex) => (
                                                <div key={columnIndex}>
                                                    {finalMatrix[rowIndex][columnIndex]}
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </>
            );
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        A':
                    </div>
                    {
                        matrix.length &&
                            matrix.length === Number(rowsSelectedValue) ?
                            printMatrixAddition()
                            :
                            null
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="transpose">
                <h2>Transpose</h2>
                {getMatrixAddition()}
            </div>
        </>
    );
}

export default Transpose;
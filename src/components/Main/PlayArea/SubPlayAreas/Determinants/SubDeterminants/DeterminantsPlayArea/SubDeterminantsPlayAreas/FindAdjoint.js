import React, { useState, useEffect } from 'react';
import getMinorsMatrix from './getMinorsMatrix';

const FindAdjoint = props => {
    const { matrix, rowsAndColumnsSelectedValue } = props;
    const [finalMatrixStructure, setFinalMatrixStructure] = useState([]);

    useEffect(() => {
        return rowsAndColumnsSelectedValue ?
            (
                setFinalMatrixStructure(
                    Array.from(
                        { length: rowsAndColumnsSelectedValue }, () =>
                        Array.from(
                            { length: rowsAndColumnsSelectedValue },
                            () => ''
                        )
                    )
                )
            ) :
            null
    }, [rowsAndColumnsSelectedValue])

    const getAdjoint = () => {
        // function to get adjoint of matrix

        const printAdjoint = () => {
            // function to print adjoint of matrix

            let finalMatrix = getMinorsMatrix(
                rowsAndColumnsSelectedValue,
                finalMatrixStructure,
                matrix
            );

            for (let i = 0; i < rowsAndColumnsSelectedValue; i++)
                for (let j = 0; j < rowsAndColumnsSelectedValue; j++) {
                    if ((i + j + 2) % 2 !== 0) finalMatrix[i][j] = -finalMatrix[i][j];
                }

            finalMatrix = finalMatrix[0].map((_, colIndex) =>
                finalMatrix.map((row) => Number(row[colIndex]))
            );

            return (
                <>
                    <div className="result">
                        <div className="label">
                            Adj(A):
                        </div>
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
                    </div>
                </>
            );
        }

        return (
            <>
                {
                    matrix.length &&
                        matrix.length === Number(rowsAndColumnsSelectedValue) &&
                        finalMatrixStructure.length &&
                        finalMatrixStructure.length === Number(rowsAndColumnsSelectedValue) ?
                        printAdjoint()
                        :
                        null
                }
            </>
        );
    }

    return (
        <>
            <div className="find-adjoint">
                <h2>Find Adjoint</h2>
                {getAdjoint()}
            </div>
        </>
    );
}

export default FindAdjoint;
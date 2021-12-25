import React, { useState, useEffect } from 'react';
import getMinorsMatrix from './getMinorsMatrix';

const FindCoFactors = props => {
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

    const getCoFactors = () => {
        // function to get co-factors of matrix

        const printCoFactors = () => {
            // function to print co-factors of matrix

            let finalMatrix = getMinorsMatrix(
                rowsAndColumnsSelectedValue,
                finalMatrixStructure,
                matrix
            );

            for (let i = 0; i < rowsAndColumnsSelectedValue; i++)
                for (let j = 0; j < rowsAndColumnsSelectedValue; j++) {
                    if ((i + j + 2) % 2 !== 0) finalMatrix[i][j] = -finalMatrix[i][j];
                }

            return (
                <>
                    <div className="result">
                        <div className="label">
                            A(A):
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
                        printCoFactors()
                        :
                        null
                }
            </>
        );
    }

    return (
        <>
            <div className="find-co-factors">
                <h2>Find Co-Factors</h2>
                {getCoFactors()}
            </div>
        </>
    );
}

export default FindCoFactors;
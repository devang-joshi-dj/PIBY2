import React, { useState, useEffect } from 'react';

const FindMinors = props => {
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

    const getMinors = () => {
        // function to get minors of matrix

        const printMinors = () => {
            // function to print minors of matrix

            let finalMatrix;
            switch (rowsAndColumnsSelectedValue) {
                case 1:
                    finalMatrix = finalMatrixStructure;
                    break;
                case 2:
                    finalMatrix = finalMatrixStructure;
                    break;
                case 3:
                    finalMatrix = finalMatrixStructure;
                    break;
                case 4:
                    finalMatrix = finalMatrixStructure;
                    break;
                case 5:
                    finalMatrix = finalMatrixStructure;
                    break;
                default:
                    break;
            }

            return (
                <>
                    <div className="result">
                        <div className="label">
                            M(A):
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
                        printMinors()
                        :
                        null
                }
            </>
        );
    }

    return (
        <>
            <div className="find-minors">
                <h2>Find Minors</h2>
                {getMinors()}
            </div>
        </>
    );
}

export default FindMinors;
import React, { useState, useEffect } from 'react';

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

            let finalMatrix;
            switch (rowsAndColumnsSelectedValue) {
                case 1:
                    finalMatrix = finalMatrixStructure;
                    finalMatrix[0][0] = Number();
                    break;
                case 2:
                    finalMatrix = finalMatrixStructure;

                    const inverseIndex = num => {
                        // function to inverse the 1 and 0 values to 0 and 1 accordingly

                        num === 0 ? num = 1 : num = 0;
                        return num;
                    }

                    for (let i = 0; i < finalMatrix.length; i++) {
                        for (let j = 0; j < finalMatrix.length; j++) {
                            finalMatrix[i][j] = Number(matrix[inverseIndex(i)][inverseIndex(j)]);
                        }
                    }
                    break;
                case 3:
                    finalMatrix = finalMatrixStructure;
                    finalMatrix[0][0] = Number(
                        (matrix[1][1] * matrix[2][2]) - (matrix[1][2] * matrix[2][1])
                    );
                    finalMatrix[0][1] = Number(
                        (matrix[1][0] * matrix[2][2]) - (matrix[1][2] * matrix[2][0])
                    );
                    finalMatrix[0][2] = Number(
                        (matrix[1][0] * matrix[2][1]) - (matrix[1][1] * matrix[2][0])
                    );
                    finalMatrix[1][0] = Number(
                        (matrix[0][1] * matrix[2][2]) - (matrix[0][2] * matrix[2][1])
                    );
                    finalMatrix[1][1] = Number(
                        (matrix[0][0] * matrix[2][2]) - (matrix[0][2] * matrix[2][0])
                    );
                    finalMatrix[1][2] = Number(
                        (matrix[0][0] * matrix[2][1]) - (matrix[0][1] * matrix[2][0])
                    );
                    finalMatrix[2][0] = Number(
                        (matrix[0][1] * matrix[1][2]) - (matrix[0][2] * matrix[1][1])
                    );
                    finalMatrix[2][1] = Number(
                        (matrix[0][0] * matrix[1][2]) - (matrix[0][2] * matrix[1][0])
                    );
                    finalMatrix[2][2] = Number(
                        (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
                    );
                    break;
                case 4:
                    finalMatrix = finalMatrixStructure;
                    finalMatrix[0][0] = Number(
                        (matrix[1][1] * (
                            (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                        )) -
                        (matrix[1][2] * (
                            (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                        )) +
                        (matrix[1][3] * (
                            (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                        ))
                    );
                    finalMatrix[0][1] = Number(
                        (matrix[1][0] * (
                            (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                        )) -
                        (matrix[1][2] * (
                            (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                        )) +
                        (matrix[1][3] * (
                            (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                        ))
                    );
                    finalMatrix[0][2] = Number(
                        (matrix[1][0] * (
                            (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                        )) -
                        (matrix[1][1] * (
                            (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                        )) +
                        (matrix[1][3] * (
                            (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                        ))
                    );
                    finalMatrix[0][3] = Number(
                        (matrix[1][0] * (
                            (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                        )) -
                        (matrix[1][1] * (
                            (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                        )) +
                        (matrix[1][2] * (
                            (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                        ))
                    );
                    finalMatrix[1][0] = Number(
                        (matrix[0][1] * (
                            (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                        )) -
                        (matrix[0][2] * (
                            (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                        )) +
                        (matrix[0][3] * (
                            (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                        ))
                    );
                    finalMatrix[1][1] = Number(
                        (matrix[0][0] * (
                            (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                        )) -
                        (matrix[0][2] * (
                            (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                        )) +
                        (matrix[0][3] * (
                            (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                        ))
                    );
                    finalMatrix[1][2] = Number(
                        (matrix[0][0] * (
                            (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                        )) -
                        (matrix[0][1] * (
                            (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                        )) +
                        (matrix[0][3] * (
                            (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                        ))
                    );
                    finalMatrix[1][3] = Number(
                        (matrix[0][0] * (
                            (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                        )) -
                        (matrix[0][1] * (
                            (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                        )) +
                        (matrix[0][2] * (
                            (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                        ))
                    );
                    finalMatrix[2][0] = Number(
                        (matrix[0][1] * (
                            (matrix[1][2] * matrix[3][3]) - (matrix[1][3] * matrix[3][2])
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][1] * matrix[3][3]) - (matrix[1][3] * matrix[3][1])
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][1] * matrix[3][2]) - (matrix[1][2] * matrix[3][1])
                        ))
                    );
                    finalMatrix[2][1] = Number(
                        (matrix[0][0] * (
                            (matrix[1][2] * matrix[3][3]) - (matrix[1][3] * matrix[3][2])
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][0] * matrix[3][3]) - (matrix[1][3] * matrix[3][0])
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * matrix[3][2]) - (matrix[1][2] * matrix[3][0])
                        ))
                    );
                    finalMatrix[2][2] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * matrix[3][3]) - (matrix[1][3] * matrix[3][1])
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * matrix[3][3]) - (matrix[1][3] * matrix[3][0])
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * matrix[3][1]) - (matrix[1][1] * matrix[3][0])
                        ))
                    );
                    finalMatrix[2][3] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * matrix[3][2]) - (matrix[1][2] * matrix[3][1])
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * matrix[3][2]) - (matrix[1][2] * matrix[3][0])
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * matrix[3][1]) - (matrix[1][1] * matrix[3][0])
                        ))
                    );
                    finalMatrix[3][0] = Number(
                        (matrix[0][1] * (
                            (matrix[1][2] * matrix[2][3]) - (matrix[1][3] * matrix[2][2])
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][1] * matrix[2][3]) - (matrix[1][3] * matrix[2][1])
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][1] * matrix[2][2]) - (matrix[1][2] * matrix[2][1])
                        ))
                    );
                    finalMatrix[3][1] = Number(
                        (matrix[0][0] * (
                            (matrix[1][2] * matrix[2][3]) - (matrix[1][3] * matrix[2][2])
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][0] * matrix[2][3]) - (matrix[1][3] * matrix[2][0])
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * matrix[2][2]) - (matrix[1][2] * matrix[2][0])
                        ))
                    );
                    finalMatrix[3][2] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * matrix[2][3]) - (matrix[1][3] * matrix[2][1])
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * matrix[2][3]) - (matrix[1][3] * matrix[2][0])
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * matrix[2][1]) - (matrix[1][1] * matrix[2][0])
                        ))
                    );
                    finalMatrix[3][3] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * matrix[2][2]) - (matrix[1][2] * matrix[2][1])
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * matrix[2][2]) - (matrix[1][2] * matrix[2][0])
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * matrix[2][1]) - (matrix[1][1] * matrix[2][0])
                        ))
                    );
                    break;
                case 5:
                    finalMatrix = finalMatrixStructure;
                    finalMatrix[0][0] = Number(
                        (matrix[1][1] * (
                            (matrix[2][2] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[1][2] * (
                            (matrix[2][1] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            ))
                        )) +
                        (matrix[1][3] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[1][4] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        ))
                    );
                    finalMatrix[0][1] = Number(
                        (matrix[1][0] * (
                            (matrix[2][2] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[1][2] * (
                            (matrix[2][0] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[1][3] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) -
                        (matrix[1][4] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[0][2] = Number(
                        (matrix[1][0] * (
                            (matrix[2][1] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            ))
                        )) -
                        (matrix[1][1] * (
                            (matrix[2][0] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[1][3] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[1][4] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[0][3] = Number(
                        (matrix[1][0] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[1][1] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[1][2] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[1][4] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            )) +
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[0][4] = Number(
                        (matrix[1][0] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[1][1] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[1][2] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[1][3] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            )) +
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[1][0] = Number(
                        (matrix[0][1] * (
                            (matrix[2][2] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[2][1] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        ))
                    );
                    finalMatrix[1][1] = Number(
                        (matrix[0][0] * (
                            (matrix[2][2] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[2][0] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[1][2] = Number(
                        (matrix[0][0] * (
                            (matrix[2][1] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[2][0] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[1][3] = Number(
                        (matrix[0][0] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[2][4] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            )) +
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[1][4] = Number(
                        (matrix[0][0] * (
                            (matrix[2][1] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[2][0] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[2][3] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][3] * (
                            (matrix[2][0] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            )) -
                            (matrix[2][1] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            )) +
                            (matrix[2][2] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[2][0] = Number(
                        (matrix[0][1] * (
                            (matrix[1][2] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][1] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][1] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][1] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) +
                            (matrix[1][3] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        ))
                    );
                    finalMatrix[2][1] = Number(
                        (matrix[0][0] * (
                            (matrix[1][2] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[2][2] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[3][3] * matrix[4][4]) - (matrix[3][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[2][3] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[3][2] * matrix[4][4]) - (matrix[3][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[3][1] * matrix[4][4]) - (matrix[3][4] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[3][0] * matrix[4][4]) - (matrix[3][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            )) +
                            (matrix[1][2] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[2][4] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) +
                            (matrix[1][3] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[3][2] * matrix[4][3]) - (matrix[3][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[3][1] * matrix[4][3]) - (matrix[3][3] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[3][0] * matrix[4][3]) - (matrix[3][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[3][1] * matrix[4][2]) - (matrix[3][2] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[3][0] * matrix[4][2]) - (matrix[3][2] * matrix[4][0])
                            )) +
                            (matrix[1][2] * (
                                (matrix[3][0] * matrix[4][1]) - (matrix[3][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[3][0] = Number(
                        (matrix[0][1] * (
                            (matrix[1][2] * (
                                (matrix[2][3] * matrix[4][4]) - (matrix[2][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][2] * matrix[4][4]) - (matrix[2][4] * matrix[4][2])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][2] * matrix[4][3]) - (matrix[2][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][1] * (
                                (matrix[2][3] * matrix[4][4]) - (matrix[2][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[4][4]) - (matrix[2][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[4][3]) - (matrix[2][3] * matrix[4][1])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[4][4]) - (matrix[2][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[4][4]) - (matrix[2][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[4][2]) - (matrix[2][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[4][3]) - (matrix[2][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[4][3]) - (matrix[2][3] * matrix[4][1])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[4][2]) - (matrix[2][2] * matrix[4][1])
                            ))
                        ))
                    );
                    finalMatrix[3][1] = Number(
                        (matrix[0][0] * (
                            (matrix[1][2] * (
                                (matrix[2][3] * matrix[4][4]) - (matrix[2][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][2] * matrix[4][4]) - (matrix[2][4] * matrix[4][2])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][2] * matrix[4][3]) - (matrix[2][3] * matrix[4][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[2][3] * matrix[4][4]) - (matrix[2][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[4][4]) - (matrix[2][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[4][3]) - (matrix[2][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[4][4]) - (matrix[2][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[4][4]) - (matrix[2][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[4][2]) - (matrix[2][2] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[4][3]) - (matrix[2][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[4][3]) - (matrix[2][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[4][2]) - (matrix[2][2] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[3][2] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[2][3] * matrix[4][4]) - (matrix[2][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[4][4]) - (matrix[2][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[4][3]) - (matrix[2][3] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[2][3] * matrix[4][4]) - (matrix[2][4] * matrix[4][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[4][4]) - (matrix[2][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[4][3]) - (matrix[2][3] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[4][4]) - (matrix[2][4] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[4][4]) - (matrix[2][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[4][1]) - (matrix[2][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[4][3]) - (matrix[2][3] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[4][3]) - (matrix[2][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[4][1]) - (matrix[2][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[3][3] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[4][4]) - (matrix[2][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[4][4]) - (matrix[2][4] * matrix[4][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[4][2]) - (matrix[2][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[4][4]) - (matrix[2][4] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[4][4]) - (matrix[2][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[4][2]) - (matrix[2][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[4][4]) - (matrix[2][4] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[4][4]) - (matrix[2][4] * matrix[4][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[4][1]) - (matrix[2][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[4][2]) - (matrix[2][2] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[4][2]) - (matrix[2][2] * matrix[4][0])
                            )) +
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[4][1]) - (matrix[2][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[3][4] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[4][3]) - (matrix[2][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[4][3]) - (matrix[2][3] * matrix[4][1])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[4][2]) - (matrix[2][2] * matrix[4][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[4][3]) - (matrix[2][3] * matrix[4][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[4][3]) - (matrix[2][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[4][2]) - (matrix[2][2] * matrix[4][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[4][3]) - (matrix[2][3] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[4][3]) - (matrix[2][3] * matrix[4][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[4][1]) - (matrix[2][1] * matrix[4][0])
                            ))
                        )) -
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[4][2]) - (matrix[2][2] * matrix[4][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[4][2]) - (matrix[2][2] * matrix[4][0])
                            )) +
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[4][1]) - (matrix[2][1] * matrix[4][0])
                            ))
                        ))
                    );
                    finalMatrix[4][0] = Number(
                        (matrix[0][1] * (
                            (matrix[1][2] * (
                                (matrix[2][3] * matrix[3][4]) - (matrix[2][4] * matrix[3][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][2] * matrix[3][4]) - (matrix[2][4] * matrix[3][2])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][1] * (
                                (matrix[2][3] * matrix[3][4]) - (matrix[2][4] * matrix[3][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[3][4]) - (matrix[2][4] * matrix[3][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[3][4]) - (matrix[2][4] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[3][4]) - (matrix[2][4] * matrix[3][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                            ))
                        ))
                    );
                    finalMatrix[4][1] = Number(
                        (matrix[0][0] * (
                            (matrix[1][2] * (
                                (matrix[2][3] * matrix[3][4]) - (matrix[2][4] * matrix[3][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][2] * matrix[3][4]) - (matrix[2][4] * matrix[3][2])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                            ))
                        )) -
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[2][3] * matrix[3][4]) - (matrix[2][4] * matrix[3][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[3][4]) - (matrix[2][4] * matrix[3][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[3][4]) - (matrix[2][4] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[3][4]) - (matrix[2][4] * matrix[3][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                            ))
                        ))
                    );
                    finalMatrix[4][2] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[2][3] * matrix[3][4]) - (matrix[2][4] * matrix[3][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[3][4]) - (matrix[2][4] * matrix[3][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[2][3] * matrix[3][4]) - (matrix[2][4] * matrix[3][3])
                            )) -
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[3][4]) - (matrix[2][4] * matrix[3][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                            ))
                        )) +
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[3][4]) - (matrix[2][4] * matrix[3][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[3][4]) - (matrix[2][4] * matrix[3][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                            ))
                        ))
                    );
                    finalMatrix[4][3] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[3][4]) - (matrix[2][4] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[3][4]) - (matrix[2][4] * matrix[3][1])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[3][4]) - (matrix[2][4] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[3][4]) - (matrix[2][4] * matrix[3][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[3][4]) - (matrix[2][4] * matrix[3][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[3][4]) - (matrix[2][4] * matrix[3][0])
                            )) +
                            (matrix[1][4] * (
                                (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                            ))
                        )) -
                        (matrix[0][4] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                            )) +
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                            ))
                        ))
                    );
                    finalMatrix[4][4] = Number(
                        (matrix[0][0] * (
                            (matrix[1][1] * (
                                (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                            ))
                        )) -
                        (matrix[0][1] * (
                            (matrix[1][0] * (
                                (matrix[2][2] * matrix[3][3]) - (matrix[2][3] * matrix[3][2])
                            )) -
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                            ))
                        )) +
                        (matrix[0][2] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[3][3]) - (matrix[2][3] * matrix[3][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[3][3]) - (matrix[2][3] * matrix[3][0])
                            )) +
                            (matrix[1][3] * (
                                (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                            ))
                        )) -
                        (matrix[0][3] * (
                            (matrix[1][0] * (
                                (matrix[2][1] * matrix[3][2]) - (matrix[2][2] * matrix[3][1])
                            )) -
                            (matrix[1][1] * (
                                (matrix[2][0] * matrix[3][2]) - (matrix[2][2] * matrix[3][0])
                            )) +
                            (matrix[1][2] * (
                                (matrix[2][0] * matrix[3][1]) - (matrix[2][1] * matrix[3][0])
                            ))
                        ))
                    );
                    break;
                default:
                    break;
            }

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
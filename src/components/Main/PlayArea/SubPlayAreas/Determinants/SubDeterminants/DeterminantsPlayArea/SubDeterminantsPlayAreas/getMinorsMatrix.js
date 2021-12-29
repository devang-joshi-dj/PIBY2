const getMinorsMatrix = (length, finalMatrixStructure, matrix) => {
    let finalMatrix;
    switch (length) {
        case 1:
            finalMatrix = finalMatrixStructure;
            finalMatrix[0][0] = 'NULL';
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

    return finalMatrix;
}

export default getMinorsMatrix;
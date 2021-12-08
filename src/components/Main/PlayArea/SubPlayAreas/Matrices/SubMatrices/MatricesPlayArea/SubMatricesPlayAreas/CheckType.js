import React, { useState, useEffect, useCallback } from 'react';
import CorrectSymbol from './Symbols/CorrectSymbol';
import WrongSymbol from './Symbols/WrongSymbol';

const CheckType = props => {
    const { matrix, rowsSelectedValue, columnsSelectedValue } = props;
    const [rowMatrix, setRowMatrix] = useState(false);
    const [columnMatrix, setColumnMatrix] = useState(false);
    const [squareMatrix, setSquareMatrix] = useState(false);
    const [diagonalMatrix, setDiagonalMatrix] = useState(false);
    const [scalarMatrix, setScalarMatrix] = useState(false);
    const [identityMatrix, setIdentityMatrix] = useState(false);
    const [nullMatrix, setNullMatrix] = useState(false);
    const [upperTriangularMatrix, setUpperTriangularMatrix] = useState(false);
    const [lowerTriangularMatrix, setLowerTriangularMatrix] = useState(false);
    const [symmetricMatrix, setSymmetricMatrix] = useState(false);
    const [skewSymmetricMatrix, setSkewSymmetricMatrix] = useState(false);

    const checkRowMatrix = useCallback(() => {
        // function to check whether the matrix is row matrix or not

        rowsSelectedValue === 1 ?
            setRowMatrix(true) :
            setRowMatrix(false);
    }, [rowsSelectedValue])

    const checkColumnMatrix = useCallback(() => {
        // function to check whether the matrix is column matrix or not

        columnsSelectedValue === 1 ?
            setColumnMatrix(true) :
            setColumnMatrix(false);
    }, [columnsSelectedValue])

    const checkSquareMatrix = useCallback(() => {
        // function to check whether the matrix is square matrix or not

        rowsSelectedValue === columnsSelectedValue ?
            setSquareMatrix(true) :
            setSquareMatrix(false);
    }, [rowsSelectedValue, columnsSelectedValue])

    const checkDiagonalMatrix = useCallback(() => {
        // function to check whether the matrix is diagonal matrix or not

        if (squareMatrix) {
            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = 0; j < columnsSelectedValue; j++)
                    if (i !== j && Number(matrix[i][j]) !== 0)
                        return setDiagonalMatrix(false);
            return setDiagonalMatrix(true);
        }
        else setDiagonalMatrix(false);
    }, [squareMatrix, rowsSelectedValue, columnsSelectedValue, matrix])

    const checkScalarMatrix = useCallback(() => {
        // function to check whether the matrix is scalar matrix or not

        if (diagonalMatrix) {
            for (let i = 0; i < rowsSelectedValue - 1; i++)
                if (Number(matrix[i][i]) !== Number(matrix[i + 1][i + 1]))
                    return setScalarMatrix(false);
            return setScalarMatrix(true);
        }
        else setScalarMatrix(false);
    }, [diagonalMatrix, rowsSelectedValue, matrix])

    const checkIdentityMatrix = useCallback(() => {
        // function to check whether the matrix is identity matrix or not

        if (scalarMatrix) {
            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = 0; j < columnsSelectedValue; j++)
                    if (i === j && Number(matrix[i][j]) === 1)
                        return setIdentityMatrix(true);
            return setIdentityMatrix(false);
        }
        else setIdentityMatrix(false);
    }, [scalarMatrix, rowsSelectedValue, columnsSelectedValue, matrix])

    const checkNullMatrix = useCallback(() => {
        // function to check whether the matrix is null matrix or not

        for (let i = 0; i < rowsSelectedValue; i++)
            for (let j = 0; j < columnsSelectedValue; j++)
                if (Number(matrix[i][j]) !== 0)
                    return setNullMatrix(false);
        return setNullMatrix(true);
    }, [rowsSelectedValue, columnsSelectedValue, matrix])

    const checkUpperTriangularMatrix = useCallback(() => {
        // function to check whether the matrix is upper triangular matrix or not

        if (squareMatrix) {
            for (let i = 1; i < rowsSelectedValue; i++)
                for (let j = 0; j < i; j++)
                    if (Number(matrix[i][j]) !== 0)
                        return setUpperTriangularMatrix(false);
            return setUpperTriangularMatrix(true);
        }
        else setUpperTriangularMatrix(false);
    }, [squareMatrix, rowsSelectedValue, matrix])

    const checkLowerTriangularMatrix = useCallback(() => {
        // function to check whether the matrix is lower triangular matrix or not

        if (squareMatrix) {
            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = i + 1; j < columnsSelectedValue; j++)
                    if (Number(matrix[i][j]) !== 0)
                        return setLowerTriangularMatrix(false);
            return setLowerTriangularMatrix(true);
        }
        else setLowerTriangularMatrix(false);
    }, [squareMatrix, rowsSelectedValue, columnsSelectedValue, matrix])

    const checkSymmetricMatrix = useCallback(() => {
        // function to check whether the matrix is symmetric triangular matrix or not

        if (squareMatrix) {
            const secondMatrix = matrix[0].map((_, colIndex) => matrix.map(row => Number(row[colIndex])));

            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = i + 1; j < columnsSelectedValue; j++)
                    if (Number(matrix[i][j]) !== Number(secondMatrix[i][j]))
                        return setSymmetricMatrix(false);
            return setSymmetricMatrix(true);
        }
        else setSymmetricMatrix(false);
    }, [squareMatrix, rowsSelectedValue, columnsSelectedValue, matrix])

    const checkSkewSymmetricMatrix = useCallback(() => {
        // function to check whether the matrix is skew symmetric matrix or not

        if (squareMatrix) {
            const secondMatrix = matrix[0].map((_, colIndex) => matrix.map(row => Number(row[colIndex])));

            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = 0; j < columnsSelectedValue; j++)
                    if (i === j && Number(matrix[i][j]) !== 0)
                        return setSkewSymmetricMatrix(false)

            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = i + 1; j < columnsSelectedValue; j++)
                    if (Number(matrix[i][j]) !== (Number(secondMatrix[i][j]) * (-1)))
                        return setSkewSymmetricMatrix(false);
            return setSkewSymmetricMatrix(true);
        }
        else setSkewSymmetricMatrix(false);
    }, [squareMatrix, rowsSelectedValue, columnsSelectedValue, matrix])

    useEffect(() => {
        // function to execute all functions to check every matrix type when matrix, rowsSelectedValue or columnsSelectedValue gets changed

        return matrix.length &&
            matrix.length === Number(rowsSelectedValue) ?
            (
                checkRowMatrix(),
                checkColumnMatrix(),
                checkSquareMatrix(),
                checkDiagonalMatrix(),
                checkScalarMatrix(),
                checkIdentityMatrix(),
                checkNullMatrix(),
                checkUpperTriangularMatrix(),
                checkLowerTriangularMatrix(),
                checkSymmetricMatrix(),
                checkSkewSymmetricMatrix()
            ) :
            null;
    }, [matrix,
        rowsSelectedValue,
        columnsSelectedValue,
        checkRowMatrix,
        checkColumnMatrix,
        checkSquareMatrix,
        checkDiagonalMatrix,
        checkScalarMatrix,
        checkIdentityMatrix,
        checkNullMatrix,
        checkUpperTriangularMatrix,
        checkLowerTriangularMatrix,
        checkSymmetricMatrix,
        checkSkewSymmetricMatrix,]);

    const getTypes = () => {
        // function to get addition of firstMatrix and secondMatrix

        const printTypes = () => {
            // function to print addition of firstMatrix and secondMatrix

            const types = [
                { label: 'Row Matrix', stateName: rowMatrix },
                { label: 'Column Matrix', stateName: columnMatrix },
                { label: 'Square Matrix', stateName: squareMatrix },
                { label: 'Diagonal Matrix', stateName: diagonalMatrix },
                { label: 'Scalar Matrix', stateName: scalarMatrix },
                { label: 'Identity Matrix', stateName: identityMatrix },
                { label: 'Null Matrix', stateName: nullMatrix },
                { label: 'Upper Triangular Matrix', stateName: upperTriangularMatrix },
                { label: 'Lower Triangular Matrix', stateName: lowerTriangularMatrix },
                { label: 'Symmetric Matrix', stateName: symmetricMatrix },
                { label: 'Skew Symmetric Matrix', stateName: skewSymmetricMatrix },
            ];

            return types.map((type, index) => {
                return (
                    <div className="types" key={index}>
                        <div className="icon">
                            {
                                type.stateName ?
                                    (
                                        <>
                                            <div className="success">
                                                <CorrectSymbol />
                                            </div>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <div className="failure">
                                                <WrongSymbol />
                                            </div>
                                        </>
                                    )
                            }
                        </div>
                        <div className="label">
                            {type.label}
                        </div>
                    </div>
                );
            });
        }

        return (
            <>
                <div className="result">
                    {
                        matrix.length &&
                            matrix.length === Number(rowsSelectedValue) ?
                            printTypes()
                            :
                            null
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="check-type">
                <h2>Check Type</h2>
                {getTypes()}
            </div>
        </>
    );
}

export default CheckType;
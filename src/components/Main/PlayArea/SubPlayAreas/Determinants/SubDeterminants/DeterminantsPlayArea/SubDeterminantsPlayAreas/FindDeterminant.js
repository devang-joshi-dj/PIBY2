import React from 'react';

const FindDeterminant = props => {
    const { matrix, rowsAndColumnsSelectedValue } = props;

    const getDeterminant = () => {
        // function to get determinant of matrix

        const printDeterminant = () => {
            // function to print determinant of matrix

            let determinant;
            switch (rowsAndColumnsSelectedValue) {
                case 1:
                    determinant = Number(matrix[0][0]);
                    break;
                case 2:
                    determinant = Number(
                        (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
                    );
                    break;
                case 3:
                    determinant = Number(
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
                default:
                    break;
            }

            return (
                <>
                    {determinant}
                </>
            );
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        |A|:
                    </div>
                    {
                        matrix.length &&
                            matrix.length === Number(rowsAndColumnsSelectedValue) ?
                            printDeterminant()
                            :
                            null
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="find-determinant">
                <h2>FindDeterminant</h2>
                {getDeterminant()}
            </div>
        </>
    );
}

export default FindDeterminant;
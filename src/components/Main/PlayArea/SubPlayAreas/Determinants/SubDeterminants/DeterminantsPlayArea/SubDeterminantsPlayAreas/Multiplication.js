import React from 'react';

const Multiplication = props => {
    const { matrix, rowsAndColumnsSelectedValue } = props;

    const getMultiplication = () => {
        // function to get multiplication of determinant

        const printMultiplication = () => {
            // function to print multiplication of determinant

            switch (rowsAndColumnsSelectedValue) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                default:
                    break;
            }

            return (
                <>

                </>
            );
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        kXA:
                    </div>
                    {
                        matrix.length &&
                            matrix.length === Number(rowsAndColumnsSelectedValue) ?
                            printMultiplication()
                            :
                            null
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="multiplication">
                <h2>Multiplication</h2>
                {getMultiplication()}
            </div>
        </>
    );
}

export default Multiplication;
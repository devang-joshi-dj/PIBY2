import React, { useEffect } from 'react';

const Matrix = props => {
    const { rowsSelectedValue, columnsSelectedValue, matrix, setMatrix } = props;

    useEffect(() => {
        return rowsSelectedValue && columnsSelectedValue ?
            (
                setMatrix(
                    Array.from(
                        { length: rowsSelectedValue }, () =>
                        Array.from(
                            { length: columnsSelectedValue },
                            () => ''
                        )
                    )
                )
            ) :
            null
    }, [rowsSelectedValue, columnsSelectedValue, setMatrix])

    const handleChange = (row, column, e) => {
        const pattern = /^[0-9\b]+$/;
        return e.target.value === '' || pattern.test(e.target.value) ?
            (
                setMatrix(
                    () => matrix.map((currentRow, currentRowIndex) => (
                        currentRow.map((value, valueIndex) =>
                            currentRowIndex === row && valueIndex === column ?
                                e.target.value
                                :
                                value
                        )
                    ))
                )
            ) :
            null;
    };

    const MatrixColumn = props => {
        const { currentRow, row } = props;

        return (
            <>
                <div className="matrix-column">
                    {row.map((column, index) => (
                        <div key={index} className="input">
                            <input
                                type="text"
                                value={matrix[currentRow][index]}
                                onChange={e => handleChange(currentRow, index, e)}
                            />
                        </div>
                    ))}
                </div>
            </>
        );
    }

    const MatrixRow = () => {
        return (
            <>
                <div className="matrix-row">
                    {matrix.map((row, rowIndex) => (
                        <MatrixColumn
                            key={rowIndex}
                            currentRow={rowIndex}
                            row={row}
                        />
                    ))}
                </div>
            </>
        );
    }

    return (
        <>
            <MatrixRow />
        </>
    );
}

export default Matrix;
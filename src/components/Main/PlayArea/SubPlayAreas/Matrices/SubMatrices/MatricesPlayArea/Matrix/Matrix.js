import React, { useState, useEffect, useRef } from 'react';

const Matrix = props => {
    const {
        rowsSelectedValue,
        columnsSelectedValue,
        matrix,
        setMatrix } = props;
    const [currentRow, setCurrentRow] = useState(0);
    const [currentColumn, setCurrentColumn] = useState(0);
    const matrixInputsElement = useRef();

    useEffect(() => {
        // function to set matrix, and current row and column to focus on when matrix structure gets changed

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
                ),
                setCurrentRow(0),
                setCurrentColumn(0)
            ) :
            null
    }, [rowsSelectedValue, columnsSelectedValue, setMatrix])

    useEffect(() => {
        // function to focus on input on every re-render accordingly

        return matrix.length ?
            matrixInputsElement
                .current
                .children[0]
                .children[currentRow]
                .children[currentColumn]
                .childNodes[0]
                .focus() :
            null;
    }, [matrix, matrixInputsElement, currentRow, currentColumn])

    const handleChange = (row, column, e) => {
        // function to set the matrix value accordingly after handling and restricting input in input fields

        const pattern = /^-?(\d+\.?\d*|\d*\.?\d+)$/;
        return e.target.value === '' || pattern.test(e.target.value) ?
            (
                setMatrix(() => matrix.map((currentRow, currentRowIndex) => (
                    currentRow.map((value, valueIndex) =>
                        currentRowIndex === row && valueIndex === column ?
                            e.target.value
                            :
                            value
                    )
                ))),
                setCurrentRow(row),
                setCurrentColumn(column)
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
            <div className="matrix" ref={matrixInputsElement}>
                <MatrixRow />
            </div>
        </>
    );
}

export default Matrix;
import React, { useState, useEffect } from 'react';
import Select from '../../../Assets/Select/Select';
import Addition from './SubMatricesPlayAreas/Addition';
import Difference from './SubMatricesPlayAreas/Difference';
import Multiplication from './SubMatricesPlayAreas/Multiplication';

const MatricesPlayArea = props => {
    const { rowsSelectedValue, columnsSelectedValue } = props;
    const [selectedOperation, setSelectedOperation] = useState();
    const [render, setRendered] = useState(false);
    const [matrix, setMatrix] = useState();
    const [rows, setRows] = useState(rowsSelectedValue);
    const [columns, setColumns] = useState(columnsSelectedValue);

    const operations = [
        { value: 'Addition', label: 'Addition' },
        { value: 'Difference', label: 'Difference' },
        { value: 'Multiplication', label: 'Multiplication' },
    ];

    useEffect(() => {
        let array;
        return rowsSelectedValue && columnsSelectedValue ?
            (
                setRendered(false),
                array = Array.from(
                    { length: rowsSelectedValue }, () =>
                    Array.from(
                        { length: columnsSelectedValue },
                        () => ''
                    )
                ),
                setRows(rowsSelectedValue),
                setColumns(columnsSelectedValue),
                setMatrix(array),
                setRendered(true)
            ) :
            null
    }, [rowsSelectedValue, columnsSelectedValue])

    const handleChange = (row, column, e) => {
        const pattern = /^[0-9\b]+$/;
        let copy;
        return e.target.value === '' || pattern.test(e.target.value) ?
            (
                copy = [...matrix],
                copy[row][column] = e.target.value,
                setMatrix(copy),
                console.log(matrix)
            ) :
            null;
    };

    const MatrixColumn = props => {
        const { currentRow, columns } = props;
        let columnElements = [];
        for (let currentColumn = 0; currentColumn < columns; currentColumn++)
            columnElements.push(
                <div key={currentColumn} className="input">
                    <input
                        type="text"
                        value={matrix[currentRow][currentColumn]}
                        onChange={e => handleChange(currentRow, currentColumn, e)}
                    />
                </div>
            );

        return (
            <>
                <div className="matrix-column">
                    {columnElements}
                </div>
            </>
        );
    }

    const MatrixRow = props => {
        const { rows, columns } = props;
        let rowElements = [];
        for (let currentRow = 0; currentRow < rows; currentRow++)
            rowElements.push(
                <MatrixColumn
                    key={currentRow}
                    currentRow={currentRow}
                    columns={columns}
                />
            );

        return (
            <>
                <div className="matrix-row">
                    {rowElements}
                </div>
            </>
        );
    }

    const Matrix = props => {
        return (
            <>
                {
                    render ?
                        <MatrixRow {...props} /> :
                        null
                }
            </>
        );
    }

    const renderMatrixInput = () => {
        // function to render Matrix Input according to rowsSelectedValue and columnSelectedValue when they are set to any value

        return rowsSelectedValue && columnsSelectedValue ?
            (
                <>
                    <div className="matrix-input">
                        <div className="label">
                            Input your Matrix:
                        </div>
                        <Matrix
                            rows={rows}
                            columns={columns}
                        />
                    </div>
                </>
            ) :
            null;
    }

    const renderSubMatricesPlayAreas = () => {
        // function to render SubMatricesPlayAreas when selectedOperation is set to any value

        const SubMatricesPlayAreas = [
            Addition,
            Difference,
            Multiplication,
        ];

        return SubMatricesPlayAreas.map((SubSet, index) => {
            return operations[index].value === selectedOperation ?
                <SubSet key={index} {...props} /> :
                null;
        });
    }

    return (
        <>
            <div className="matrices-play-area">
                {renderMatrixInput()}
                <Select
                    class="matrices-select"
                    options={operations}
                    selectedValue={selectedOperation}
                    setSelectedValue={setSelectedOperation}
                />
                {renderSubMatricesPlayAreas()}
            </div>
        </>
    );
}

export default MatricesPlayArea;
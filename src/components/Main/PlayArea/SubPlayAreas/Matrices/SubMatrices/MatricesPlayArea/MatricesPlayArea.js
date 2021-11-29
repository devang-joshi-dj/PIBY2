import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';
import Input from '../../../Assets/Input/Input';
import Addition from './SubMatricesPlayAreas/Addition';
import Difference from './SubMatricesPlayAreas/Difference';
import Multiplication from './SubMatricesPlayAreas/Multiplication';

const MatricesPlayArea = props => {
    const { rowsSelectedValue, columnsSelectedValue } = props;
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'Addition', label: 'Addition' },
        { value: 'Difference', label: 'Difference' },
        { value: 'Multiplication', label: 'Multiplication' },
    ];

    const MatrixRow = props => {
        const { columns } = props;
        let rowElements = [];
        for (let i = 0; i < columns; i++)
            rowElements.push(<Input
                // setValue={setFirstInputValue}
                filter={true}
            />)
        return (
            <>
                <div className="matrix-row">
                    {rowElements}
                </div>
            </>
        )
    }

    const MatrixColumn = props => {
        const { rows, columns } = props;
        let columnElements = [];
        for (let i = 0; i < rows; i++)
            columnElements.push(<MatrixRow columns={columns} />);
        return (
            <>
                <div className="matrix-column">
                    {columnElements}
                </div>
            </>
        )
    }

    const Matrix = props => {
        return (
            <>
                <MatrixColumn {...props} />
            </>
        )
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
                            rows={rowsSelectedValue}
                            columns={columnsSelectedValue}
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
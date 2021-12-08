import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';
import Matrix from './Matrix/Matrix';
import Addition from './SubMatricesPlayAreas/Addition';
import Difference from './SubMatricesPlayAreas/Difference';
import Multiplication from './SubMatricesPlayAreas/Multiplication';
import Division from './SubMatricesPlayAreas/Division';
import Transpose from './SubMatricesPlayAreas/Transpose';
import FindElement from './SubMatricesPlayAreas/FindElement';
import CheckType from './SubMatricesPlayAreas/CheckType';

const MatricesPlayArea = props => {
    const { rowsSelectedValue, columnsSelectedValue } = props;
    const [selectedOperation, setSelectedOperation] = useState();
    const [matrix, setMatrix] = useState([]);

    const operations = [
        { value: 'Addition', label: 'Addition' },
        { value: 'Difference', label: 'Difference' },
        { value: 'Multiplication', label: 'Multiplication' },
        { value: 'Division', label: 'Division' },
        { value: 'Transpose', label: 'Transpose' },
        { value: 'FindElement', label: 'Find Element' },
        { value: 'CheckType', label: 'Check Type' },
    ];

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
                            matrix={matrix}
                            setMatrix={setMatrix}
                            rowsSelectedValue={rowsSelectedValue}
                            columnsSelectedValue={columnsSelectedValue}
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
            Division,
            Transpose,
            FindElement,
            CheckType,
        ];

        return SubMatricesPlayAreas.map((SubMatricesPlayAreas, index) => {
            return operations[index].value === selectedOperation ?
                <SubMatricesPlayAreas
                    matrix={matrix}
                    key={index}
                    {...props}
                /> :
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
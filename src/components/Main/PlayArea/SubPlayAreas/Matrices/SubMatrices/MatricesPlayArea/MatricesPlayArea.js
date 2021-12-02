import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';
import Matrix from './Matrix/Matrix';
import Addition from './SubMatricesPlayAreas/Addition';
import Difference from './SubMatricesPlayAreas/Difference';
import Multiplication from './SubMatricesPlayAreas/Multiplication';

const MatricesPlayArea = props => {
    const { rowsSelectedValue, columnsSelectedValue } = props;
    const [selectedOperation, setSelectedOperation] = useState();
    const [matrix, setMatrix] = useState([]);

    const operations = [
        { value: 'Addition', label: 'Addition' },
        { value: 'Difference', label: 'Difference' },
        { value: 'Multiplication', label: 'Multiplication' },
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
                            {...props}
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
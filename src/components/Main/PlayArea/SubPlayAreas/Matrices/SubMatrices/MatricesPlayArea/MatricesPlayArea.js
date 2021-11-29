import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';
import Addition from './SubMatricesPlayAreas/Addition';
import Difference from './SubMatricesPlayAreas/Difference';
import Multiplication from './SubMatricesPlayAreas/Multiplication';

const MatricesPlayArea = props => {
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'Addition', label: 'Addition' },
        { value: 'Difference', label: 'Difference' },
        { value: 'Multiplication', label: 'Multiplication' },
    ];

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
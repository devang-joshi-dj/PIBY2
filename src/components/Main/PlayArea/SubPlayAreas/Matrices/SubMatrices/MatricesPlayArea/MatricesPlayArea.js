import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';

const MatricesPlayArea = props => {
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'Addition', label: 'Addition' },
        { value: 'Difference', label: 'Difference' },
        { value: 'Multiplication', label: 'Multiplication' },
    ];

    const renderSubSets = () => {
        // function to render SubSets when selectedOperation is set to any value

        // const SubSets = [
        //     Addition,
        //     Difference,
        //     Multiplication,
        // ];

        // return SubSets.map((SubSet, index) => {
        //     return operations[index].value === selectedOperation ?
        //         <SubSet key={index} {...props} /> :
        //         null;
        // });
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
                {renderSubSets()}
            </div>
        </>
    );
}

export default MatricesPlayArea;
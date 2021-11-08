import React, { useState } from 'react';
import Select from '../../Assets/Select';
import DisplayPlayArea from './DisplayPlayArea/DisplayPlayArea';

const SetsPlayArea = () => {
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'intersection', label: 'Intersection' },
        { value: 'union', label: 'Union' },
        { value: 'difference', label: 'Difference' },
        { value: 'cartesian-product', label: 'Cartesian Product' },
        { value: 'symmetric-difference', label: 'Symmetric Difference' },
    ];

    return (
        <>
            <div className="sets-play-area">
                <Select
                    class="sets-select"
                    options={operations}
                    selectedValue={selectedOperation}
                    setSelectedValue={setSelectedOperation}
                />
                <DisplayPlayArea
                    selectedValue={selectedOperation}
                    setSelectedValue={setSelectedOperation}
                />
            </div>
        </>
    )
}

export default SetsPlayArea;
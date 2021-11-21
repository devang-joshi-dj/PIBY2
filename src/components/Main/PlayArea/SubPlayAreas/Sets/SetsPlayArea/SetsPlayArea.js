import React, { useState } from 'react';
import Select from '../../Assets/Select/Select';
import Intersection from './SubSets/Intersection';
import Union from './SubSets/Union';
import Difference from './SubSets/Difference';
import SymmetricDifference from './SubSets/SymmetricDifference';
import CartesianProduct from './SubSets/CartesianProduct';
import PowerSet from './SubSets/PowerSet';
import Complements from './SubSets/Complements';
import Check from './SubSets/Check';

const SetsPlayArea = props => {
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'Union', label: 'Union' },
        { value: 'Intersection', label: 'Intersection' },
        { value: 'Difference', label: 'Difference' },
        { value: 'SymmetricDifference', label: 'Symmetric Difference' },
        { value: 'CartesianProduct', label: 'Cartesian Product' },
        { value: 'PowerSet', label: 'PowerSet' },
        { value: 'Complements', label: 'Complements' },
        { value: 'Check', label: 'Check' },
    ];

    const renderSubSets = () => {
        // function to render SubSets when selectedOperation is set to any value

        const SubSets = [
            Union,
            Intersection,
            Difference,
            SymmetricDifference,
            CartesianProduct,
            PowerSet,
            Complements,
            Check,
        ];

        return SubSets.map((SubSet, index) => {
            return operations[index].value === selectedOperation ?
                <SubSet key={index} {...props} /> :
                null;
        });
    }

    return (
        <>
            <div className="sets-play-area">
                <Select
                    class="sets-select"
                    options={operations}
                    selectedValue={selectedOperation}
                    setSelectedValue={setSelectedOperation}
                />
                {renderSubSets()}
            </div>
        </>
    );
}

export default SetsPlayArea;
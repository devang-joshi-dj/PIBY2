import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';
import Intersection from './SubSetsPlayAreas/Intersection';
import Union from './SubSetsPlayAreas/Union';
import Difference from './SubSetsPlayAreas/Difference';
import SymmetricDifference from './SubSetsPlayAreas/SymmetricDifference';
import CartesianProduct from './SubSetsPlayAreas/CartesianProduct';
import PowerSet from './SubSetsPlayAreas/PowerSet';
import Complements from './SubSetsPlayAreas/Complements';
import Check from './SubSetsPlayAreas/Check';

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

    const renderSubSetsPlayAreas = () => {
        // function to render SubSetsPlayAreas when selectedOperation is set to any value

        const SubSetsPlayAreas = [
            Union,
            Intersection,
            Difference,
            SymmetricDifference,
            CartesianProduct,
            PowerSet,
            Complements,
            Check,
        ];

        return SubSetsPlayAreas.map((SubSet, index) => {
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
                {renderSubSetsPlayAreas()}
            </div>
        </>
    );
}

export default SetsPlayArea;
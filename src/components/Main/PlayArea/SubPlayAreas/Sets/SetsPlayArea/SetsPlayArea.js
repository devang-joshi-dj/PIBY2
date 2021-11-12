import React, { useState } from 'react';
import Select from '../../Assets/Select/Select';
import Intersection from './SubSets/Intersection';
import Union from './SubSets/Union';
import Difference from './SubSets/Difference';
import SymmetricDifference from './SubSets/SymmetricDifference';
import CartesianProduct from './SubSets/CartesianProduct';
import PowerSet from './SubSets/PowerSet';

const SetsPlayArea = (props) => {
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'Union', label: 'Union' },
        { value: 'Intersection', label: 'Intersection' },
        { value: 'Difference', label: 'Difference' },
        { value: 'SymmetricDifference', label: 'Symmetric Difference' },
        { value: 'CartesianProduct', label: 'Cartesian Product' },
        { value: 'PowerSet', label: 'PowerSet' },
    ];

    const renderSubSets = () => {
        const SubSets = [
            Union,
            Intersection,
            Difference,
            SymmetricDifference,
            CartesianProduct,
            PowerSet,
        ];

        return SubSets.map((SubSet, index) => {
            if (operations[index].value === selectedOperation)
                return <SubSet key={index} {...props} />;
            return null;
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
import React, { useState } from 'react';
import Select from '../../Assets/Select/Select';
import Intersection from './SubSets/Intersection';
import Union from './SubSets/Union';
import Difference from './SubSets/Difference';
import CartesianProduct from './SubSets/CartesianProduct';
import SymmetricDifference from './SubSets/SymmetricDifference';

const SetsPlayArea = (props) => {
    const [selectedOperation, setSelectedOperation] = useState();

    const operations = [
        { value: 'Union', label: 'Union' },
        { value: 'Intersection', label: 'Intersection' },
        { value: 'Difference', label: 'Difference' },
        { value: 'CartesianProduct', label: 'Cartesian Product' },
        { value: 'SymmetricDifference', label: 'Symmetric Difference' },
    ];

    const renderSubSets = () => {
        const SubSets = [
            Union,
            Intersection,
            Difference,
            CartesianProduct,
            SymmetricDifference,
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
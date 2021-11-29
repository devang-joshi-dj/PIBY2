import React, { useState } from 'react';
import './matrices.css';
import Heading from '../../../../Miscs/Heading/Heading';
import Inputs from './SubMatrices/Inputs/Inputs';
import MatricesPlayAreas from './SubMatrices/MatricesPlayArea/MatricesPlayArea';

const Matrices = () => {
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');

    return (
        <>
            <div className="matrices">
                <Heading>Matrices</Heading>
                <Inputs
                    setFirstInputValue={setFirstInputValue}
                    setSecondInputValue={setSecondInputValue}
                />
                <MatricesPlayAreas
                    firstInputValue={firstInputValue}
                    secondInputValue={secondInputValue}
                />
            </div>
        </>
    );
}

export default Matrices;
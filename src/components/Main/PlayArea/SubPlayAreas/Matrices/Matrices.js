import React, { useState } from 'react';
import './matrices.css';
import Heading from '../../../../Miscs/Heading/Heading';
import Inputs from './SubMatrices/Inputs/Inputs';
import MatricesPlayArea from './SubMatrices/MatricesPlayArea/MatricesPlayArea';

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
                <MatricesPlayArea
                    firstInputValue={firstInputValue}
                    secondInputValue={secondInputValue}
                />
            </div>
        </>
    );
}

export default Matrices;
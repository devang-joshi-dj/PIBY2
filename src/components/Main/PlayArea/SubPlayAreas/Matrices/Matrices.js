import React, { useState } from 'react';
import './matrices.css';
import Heading from '../../../../Miscs/Heading/Heading';
import Inputs from './MatricesPlayArea/Inputs';

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
            </div>
        </>
    );
}

export default Matrices;
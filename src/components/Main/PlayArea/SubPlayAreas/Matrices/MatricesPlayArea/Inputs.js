import React from 'react';
import './inputs.css';
import Input from '../../Assets/Input/Input';

const Matrices = props => {
    const { setFirstInputValue, setSecondInputValue } = props;

    return (
        <>
            <div className="matrices-input">
                <label>Specify the Order of the Matrix:</label>
                <Input setValue={setFirstInputValue} />
                <label>X</label>
                <Input setValue={setSecondInputValue} />
            </div>
        </>
    );
}

export default Matrices;
import React from 'react';
import './inputs.css';
import Input from '../../../Assets/Input/Input';

const Matrices = props => {
    const { setFirstInputValue, setSecondInputValue } = props;

    return (
        <>
            <div className="matrices-input">
                <div className="label">Specify the Order of the Matrix:</div>
                <Input
                    setValue={setFirstInputValue}
                    filter={true}
                />
                <div className="symbol">X</div>
                <Input
                    setValue={setSecondInputValue}
                    filter={true}
                />
            </div>
        </>
    );
}

export default Matrices;
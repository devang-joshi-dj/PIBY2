import React, { useState } from 'react';
import './input.css';

const Input = props => {
    const { setValue, children } = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
        // function to handle the operations when the value is changed in input component

        setInputValue(e.target.value);
        setValue(e.target.value);
    }

    return (
        <>
            <div className="input">
                <label htmlFor={children}>
                    {children}
                </label>
                <input
                    id={children}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Input;
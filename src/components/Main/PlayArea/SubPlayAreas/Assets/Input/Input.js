import React, { useState } from 'react';
import './input.css';

const Input = props => {
    const { setValue, children } = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
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
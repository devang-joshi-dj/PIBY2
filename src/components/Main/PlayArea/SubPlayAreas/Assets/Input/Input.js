import React, { useState } from 'react';
import './input.css';

const Input = props => {
    const { setValue, children, filter } = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
        // function to handle the operations when the value is changed in input component

        const pattern = /^[0-9\b]+$/;
        return filter ?
            (
                (e.target.value === '' || pattern.test(e.target.value)) ?
                    (
                        setInputValue(e.target.value)
                    ) :
                    null
            ) :
            (
                setInputValue(e.target.value),
                setValue(e.target.value)
            );


    }

    return (
        <>
            <div className="input">
                {
                    children ?
                        (
                            <label htmlFor={children}>
                                {children}
                            </label>
                        ) :
                        null
                }
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
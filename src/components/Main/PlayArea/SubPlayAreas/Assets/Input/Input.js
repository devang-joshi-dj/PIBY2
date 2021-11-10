import React, { useState } from "react";
import './input.css';

const Input = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
        props.setValue(e.target.value);
    }

    return (
        <>
            <div className="input">
                <label htmlFor={props.children}>
                    {props.children}
                </label>
                <input
                    id={props.children}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Input;
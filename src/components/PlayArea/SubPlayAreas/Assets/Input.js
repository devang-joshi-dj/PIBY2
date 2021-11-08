import React, { useState } from "react";

const Input = (props) => {
    const [value, setValue] = useState("");

    return (
        <>
            <div>
                <label htmlFor={props.children}>
                    {props.children}
                </label>
                <input
                    id={props.children}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    )
}

export default Input;
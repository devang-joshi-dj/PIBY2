import React from 'react';
import './radio.css';

const Radio = (props) => {

    const handleChange = (e) => {
        props.setOption(e.target.id);
    };

    return (
        <>
            <div className="radio-group">
                {props.options.map((option, index) => {
                    return (
                        <label key={index} >
                            <input
                                type="radio"
                                id={option}
                                name={props.name}
                                value={option}
                                checked={option === props.option}
                                onChange={handleChange}
                            />
                            <span>{option}</span>
                        </label>
                    );
                })}
            </div>
        </>
    );
}

export default Radio;
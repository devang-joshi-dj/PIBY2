import React from 'react';
import './radio.css';

const Radio = (props) => {
    return (
        <>
            <div className="radio-group">
                {props.options.map((option) => {
                    return (
                        <>
                            <div className="radio">
                                <input
                                    type="radio"
                                    id={option}
                                    name={props.name}
                                    value={option}
                                />
                                <label forHtml={option} >
                                    {option}
                                </label>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Radio;
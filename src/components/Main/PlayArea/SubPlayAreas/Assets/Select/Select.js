import React from 'react';
import './select.css'
import Select from 'react-select';

const SetsPlayArea = (props) => {

    const handleOperationChange = e => {
        props.setSelectedValue(e.value);
    }

    return (
        <>
            <div className={`select`}>
                <label htmlFor="select">Select The Desired Operation:</label>
                <Select
                    id="select"
                    options={props.options}
                    value={props.options.find(obj => obj.value === props.selectedValue)}
                    onChange={handleOperationChange}
                />
            </div>
        </>
    )
}

export default SetsPlayArea;
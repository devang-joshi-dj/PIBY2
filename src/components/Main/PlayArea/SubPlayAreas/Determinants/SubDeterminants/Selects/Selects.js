import React from 'react';
import './selects.css';
import Select from 'react-select';

const Selects = props => {
    const { rowsAndColumnsSelectedValue, setRowsAndColumnsSelectedValue } = props;

    const handleValueChange = e => {
        // function to handle the value when the value is changed in select component

        setRowsAndColumnsSelectedValue(e.value);
    }

    const options = [
        { value: 1, label: '1X1' },
        { value: 2, label: '2X2' },
        { value: 3, label: '3X3' },
        { value: 4, label: '4X4' },
        { value: 5, label: '5X5' },
    ];

    return (
        <>
            <div className="matrix-input">
                <div className="label">Specify the Order of the Matrix:</div>
                <Select
                    id="select"
                    options={options}
                    value={options.find(obj => obj.value === rowsAndColumnsSelectedValue)}
                    onChange={handleValueChange}
                />
            </div>
        </>
    );
}

export default Selects;
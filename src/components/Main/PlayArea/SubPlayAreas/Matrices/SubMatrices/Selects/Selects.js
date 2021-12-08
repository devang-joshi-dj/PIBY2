import React from 'react';
import './selects.css';
import Select from 'react-select';

const Selects = props => {
    const {
        rowsSelectedValue,
        setRowsSelectedValue,
        columnselectedValue,
        setColumnsSelectedValue } = props;

    const handleFirstValueChange = e => {
        // function to handle the value when the value is changed in select component

        setRowsSelectedValue(e.value);
    }

    const handleSecondValueChange = e => {
        // function to handle the value when the value is changed in select component

        setColumnsSelectedValue(e.value);
    }

    const options = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
    ];

    return (
        <>
            <div className="matrices-input">
                <div className="label">Specify the Order of the Matrix:</div>
                <Select
                    id="select"
                    options={options}
                    value={options.find(obj => obj.value === rowsSelectedValue)}
                    onChange={handleFirstValueChange}
                />
                <div className="symbol">X</div>
                <Select
                    id="select"
                    options={options}
                    value={options.find(obj => obj.value === columnselectedValue)}
                    onChange={handleSecondValueChange}
                />
            </div>
        </>
    );
}

export default Selects;
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const FindElement = props => {
    const { matrix, rowsSelectedValue, columnsSelectedValue } = props;
    const [currentRow, setCurrentRow] = useState();
    const [currentColumn, setCurrentColumn] = useState();
    const [rowOptions, setRowOptions] = useState();
    const [columnOptions, setColumnOptions] = useState();

    useEffect(() => {
        // function to set RowOptions accordingly with rowsSelectedValue even when it changes

        let rowOptions = [];
        for (let i = 1; i <= rowsSelectedValue; i++) {
            rowOptions = rowOptions.concat({ value: `${i}`, label: `${i}` });
        }
        setRowOptions(rowOptions);
    }, [rowsSelectedValue]);

    useEffect(() => {
        // function to set columnOptions accordingly with columnsSelectedValue even when it changes

        let columnOptions = [];
        for (let i = 1; i <= columnsSelectedValue; i++) {
            columnOptions = columnOptions.concat({ value: `${i}`, label: `${i}` });
        }
        setColumnOptions(columnOptions);
    }, [columnsSelectedValue]);

    const getElement = () => {
        // function to get the specific element

        const printSelects = () => {
            // function to render select elements

            const handleRowValueChange = e => {
                // function to handle the value of currentRow when the value is changed in select component

                setCurrentRow(e.value);
            }

            const handleColumnValueChange = e => {
                // function to handle the value of currentColumn when the value is changed in select component

                setCurrentColumn(e.value);
            }

            return (
                <>
                    <div className="matrices-input">
                        <div className="info">Specify the Order for the Element:</div>
                        <Select
                            id="select"
                            options={rowOptions}
                            value={rowOptions.find(obj => obj.value === currentRow)}
                            onChange={handleRowValueChange}
                        />
                        <div className="symbol">X</div>
                        <Select
                            id="select"
                            options={columnOptions}
                            value={columnOptions.find(obj => obj.value === currentColumn)}
                            onChange={handleColumnValueChange}
                        />
                    </div>
                </>
            );
        }

        const printElement = () => {
            // function to print the specific element

            return (
                <>
                    <div className="result">
                        <div className="label">
                            A
                            <sub>
                                {`${currentRow}${currentColumn}`}
                            </sub>:
                        </div>
                        {
                            matrix.length &&
                                matrix.length === Number(rowsSelectedValue) &&
                                currentRow <= rowsSelectedValue &&
                                currentColumn <= columnsSelectedValue ?
                                Number(matrix[currentRow - 1][currentColumn - 1])
                                :
                                `Does not exist`
                        }
                    </div>
                </>
            );
        }

        return (
            <>
                {
                    rowOptions &&
                        columnOptions ?
                        printSelects() :
                        null
                }
                {
                    currentRow &&
                        currentColumn ?
                        printElement() :
                        null
                }
            </>
        );
    }

    return (
        <>
            <div className="find-element">
                <h2>Find Element</h2>
                {getElement()}
            </div>
        </>
    );
}

export default FindElement;
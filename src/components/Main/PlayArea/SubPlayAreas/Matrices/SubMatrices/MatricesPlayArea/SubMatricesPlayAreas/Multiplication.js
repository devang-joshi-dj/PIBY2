import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Input from '../../../../Assets/Input/Input';
import Radio from '../../../../Assets/Radio/Radio';
import Matrix from '../../../../Assets/Matrix/Matrix';
import ProductSymbol from './Symbols/ProductSymbol';

const Multiplication = props => {
    const { matrix, rowsSelectedValue, columnsSelectedValue } = props;
    const [secondMatrix, setSecondMatrix] = useState([]);
    const [multiplicationOption, setMultiplicationOption] = useState('Constant');
    const [constantValue, setConstantValue] = useState(0);
    const options = ['Constant', 'Matrix'];
    const [finalMatrixStructure, setFinalMatrixStructure] = useState([]);
    const [finalOptionalMatrixStructure, setFinalOptionalMatrixStructure] = useState([]);
    const [secondMatrixColumnsSelectedValue, setSecondMatrixColumnsSelectedValue] = useState();

    useEffect(() => {
        // function to set finalMatrixStructure when matrix structure gets changed

        switch (multiplicationOption) {
            case 'Constant':
                return rowsSelectedValue && columnsSelectedValue ?
                    (
                        setFinalMatrixStructure(
                            Array.from(
                                { length: rowsSelectedValue }, () =>
                                Array.from(
                                    { length: columnsSelectedValue },
                                    () => ''
                                )
                            )
                        )
                    ) :
                    null;
            case 'Matrix':
                return rowsSelectedValue && secondMatrixColumnsSelectedValue ?
                    (
                        setFinalMatrixStructure(
                            Array.from(
                                { length: rowsSelectedValue }, () =>
                                Array.from(
                                    { length: secondMatrixColumnsSelectedValue },
                                    () => ''
                                )
                            )
                        ),
                        setFinalOptionalMatrixStructure(
                            Array.from(
                                { length: columnsSelectedValue }, () =>
                                Array.from(
                                    { length: columnsSelectedValue },
                                    () => ''
                                )
                            )
                        )
                    ) :
                    null;
            default:
                return null;
        }
    }, [multiplicationOption,
        rowsSelectedValue,
        columnsSelectedValue,
        secondMatrixColumnsSelectedValue])

    useEffect(() => {
        // function to set constantValue to zero and secondMatrixColumnsSelectedValue to null if there is a change in multiplicationOption

        setConstantValue(0);
        setSecondMatrixColumnsSelectedValue();
    }, [multiplicationOption]);

    const renderInput = () => {
        // function to render Input when multiplicationOption is set accordingly

        switch (multiplicationOption) {
            case 'Constant':
                return (
                    <>
                        <Input
                            placeholder="0"
                            setValue={setConstantValue}
                            filter={true}
                        >
                            Input your Constant:
                        </Input>
                    </>
                );
            case 'Matrix':
                const options = [
                    { value: 1, label: 1 },
                    { value: 2, label: 2 },
                    { value: 3, label: 3 },
                    { value: 4, label: 4 },
                    { value: 5, label: 5 },
                ];

                const handleSecondValueChange = e => {
                    // function to handle the value when the value is changed in select component

                    setSecondMatrixColumnsSelectedValue(e.value);
                }

                return (
                    <>
                        <div className="matrices-input">
                            <div className="label">Specify the Order of the Matrix:</div>
                            <div className="label">{columnsSelectedValue}</div>
                            <div className="symbol">X</div>
                            <Select
                                id="select"
                                options={options}
                                value={options.find(obj => obj.value === secondMatrixColumnsSelectedValue)}
                                onChange={handleSecondValueChange}
                            />
                        </div>
                        {
                            secondMatrixColumnsSelectedValue ?
                                (
                                    <div className="matrix-input">
                                        <div className="label">
                                            Input your 2nd Matrix:
                                        </div>
                                        <Matrix
                                            matrix={secondMatrix}
                                            setMatrix={setSecondMatrix}
                                            rowsSelectedValue={columnsSelectedValue}
                                            columnsSelectedValue={secondMatrixColumnsSelectedValue}
                                        />
                                    </div>
                                ) :
                                null
                        }
                    </>
                );
            default:
                return null;
        }
    }

    const getMatrixMultiplication = () => {
        // function to get complements of firstFinalSetArray and secondFinalSetArray

        const PrintConstantToMatrixMultiplication = () => {
            // function to print Constant To Matrix Multiplication

            let finalMatrix = finalMatrixStructure;
            for (let i = 0; i < rowsSelectedValue; i++)
                for (let j = 0; j < columnsSelectedValue; j++) {
                    finalMatrix[i][j] = Number(matrix[i][j]) * Number(constantValue);
                }

            return (
                <>
                    <div className="result">
                        <div className="label">
                            k
                            <ProductSymbol />
                            A:
                        </div>
                        <div className="print-matrix">
                            {
                                <div className="print-matrix-row">
                                    {
                                        finalMatrix.map((row, rowIndex) => (
                                            <div key={rowIndex} className="print-matrix-column">
                                                {row.map((column, columnIndex) => (
                                                    <div key={columnIndex}>
                                                        {finalMatrix[rowIndex][columnIndex]}
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </>
            );
        }

        const PrintMatrixToMatrixMultiplication = () => {
            // function to print Matrix To Matrix Multiplication

            const PrintAMatrixToBMatrixMultiplication = () => {
                // function to print A Matrix To B Matrix Multiplication

                let finalMatrix = finalMatrixStructure;
                for (let i = 0; i < rowsSelectedValue; i++) {
                    for (let j = 0; j < secondMatrixColumnsSelectedValue; j++) {
                        finalMatrix[i][j] = 0;
                        for (let k = 0; k < columnsSelectedValue; k++) {
                            finalMatrix[i][j] += matrix[i][k] * secondMatrix[k][j];
                        }
                    }
                }

                return (
                    <>
                        {
                            secondMatrix.length &&
                                secondMatrix.length === Number(columnsSelectedValue) ?
                                <div className="result">
                                    <div className="label">
                                        A
                                        <ProductSymbol />
                                        B:
                                    </div>
                                    <div className="print-matrix">
                                        {
                                            <div className="print-matrix-row">
                                                {
                                                    finalMatrix.map((row, rowIndex) => (
                                                        <div key={rowIndex} className="print-matrix-column">
                                                            {row.map((column, columnIndex) => (
                                                                <div key={columnIndex}>
                                                                    {finalMatrix[rowIndex][columnIndex]}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                : null
                        }
                    </>
                );
            }

            const PrintBMatrixToAMatrixMultiplication = () => {
                // function to print B Matrix To A Matrix Multiplication

                let finalMatrix = finalOptionalMatrixStructure;
                for (let i = 0; i < columnsSelectedValue; i++) {
                    for (let j = 0; j < columnsSelectedValue; j++) {
                        finalMatrix[i][j] = 0;
                        for (let k = 0; k < secondMatrixColumnsSelectedValue; k++) {
                            finalMatrix[i][j] += secondMatrix[i][k] * matrix[k][j];
                        }
                    }
                }

                return (
                    <>
                        {
                            secondMatrix.length &&
                                secondMatrix.length === Number(columnsSelectedValue) ?
                                <div className="result">
                                    <div className="label">
                                        B
                                        <ProductSymbol />
                                        A:
                                    </div>
                                    <div className="print-matrix">
                                        {
                                            <div className="print-matrix-row">
                                                {
                                                    finalMatrix.map((row, rowIndex) => (
                                                        <div key={rowIndex} className="print-matrix-column">
                                                            {row.map((column, columnIndex) => (
                                                                <div key={columnIndex}>
                                                                    {finalMatrix[rowIndex][columnIndex]}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                : null
                        }
                    </>
                );
            }

            return (
                <>
                    <PrintAMatrixToBMatrixMultiplication />
                    {
                        rowsSelectedValue === secondMatrixColumnsSelectedValue ?
                            <PrintBMatrixToAMatrixMultiplication /> :
                            null
                    }
                </>
            );
        }

        const renderMultiplication = () => {
            // function to render result of specific type of multiplication accordingly

            switch (multiplicationOption) {
                case 'Constant':
                    return <PrintConstantToMatrixMultiplication />
                case 'Matrix':
                    return secondMatrixColumnsSelectedValue &&
                        secondMatrix.length &&
                        secondMatrix.length === Number(columnsSelectedValue) ?
                        <PrintMatrixToMatrixMultiplication /> :
                        null
                default:
                    return null;
            }
        }

        return (
            <>
                <div className="info">
                    What would you do multiplication with?
                </div>
                <Radio
                    radioOptions={options}
                    radioName="multiplication-options"
                    radioOption={multiplicationOption}
                    setOption={setMultiplicationOption}
                />
                {renderInput()}
                {
                    matrix.length &&
                        finalMatrixStructure.length &&
                        matrix.length === Number(rowsSelectedValue) &&
                        finalMatrixStructure.length === Number(rowsSelectedValue) ?
                        renderMultiplication()
                        : null
                }
            </>
        );
    }

    return (
        <>
            <div className="multiplication">
                <h2>Multiplication</h2>
                {getMatrixMultiplication()}
            </div>
        </>
    );
}

export default Multiplication;
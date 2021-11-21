import React, { useState, useEffect } from 'react';
import './inputs.css';
import Input from '../../../Assets/Input/Input';

const Inputs = props => {
    const {
        firstInputValue,
        setFirstInputValue,
        secondInputValue, setSecondInputValue,
        setFirstFinalSetArray,
        setSecondFinalSetArray,
    } = props;
    const [firstPrintArray, setFirstPrintArray] = useState('');
    const [secondPrintArray, setSecondPrintArray] = useState('');

    const trimArray = array => {
        // function to trim and filter any input that is passed

        let trimmedArray = array.split(',').map(element => {
            return element.trim();
        }); // trimming spaces around all individual elements after splitting array
        trimmedArray = trimmedArray.filter(e => e); // removing empty values
        trimmedArray = [...new Set(trimmedArray)]; // removing duplicate values
        return trimmedArray;
    }

    useEffect(() => {
        // function to trim firstInputValue whenever firstInputValue is changed

        let trimmedArray = trimArray(firstInputValue);
        setFirstFinalSetArray(trimmedArray);
        setFirstPrintArray(`{${trimmedArray.join(', ')}}`);
    }, [firstInputValue]);

    useEffect(() => {
        // function to trim secondInputValue whenever secondInputValue is changed

        let trimmedArray = trimArray(secondInputValue);
        setSecondFinalSetArray(trimmedArray);
        setSecondPrintArray(`{${trimmedArray.join(', ')}}`);
    }, [secondInputValue]);

    const FirstInputSet = () => {
        return (
            <>
                <div className="first input-set">
                    {firstPrintArray}
                </div>
            </>
        );
    }

    const renderFirstInputSet = () => {
        // function to render FirstInputSet when firstInputValue is set to any value

        return firstInputValue ?
            <FirstInputSet /> :
            null;
    }

    const SecondInputSet = () => {
        return (
            <>
                <div className="second input-set">
                    {secondPrintArray}
                </div>
            </>
        );
    }

    const renderSecondInputSet = () => {
        // function to render SecondInputSet when secondInputValue is set to any value

        return secondInputValue ?
            <SecondInputSet /> :
            null;
    }

    return (
        <>
            <div className="sets-inputs">
                <div className="info">Individually Input Your Sets With Comma Separated Elements Without Any Curly Or Square Brackets</div>
                <Input setValue={setFirstInputValue}>
                    A:
                </Input>
                {renderFirstInputSet()}
                <Input setValue={setSecondInputValue}>
                    B:
                </Input>
                {renderSecondInputSet()}
            </div>
        </>
    );
}

export default Inputs;
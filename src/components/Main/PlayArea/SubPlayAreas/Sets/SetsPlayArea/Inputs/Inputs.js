import React, { useState, useEffect } from 'react';
import './input.css';
import Input from '../../../Assets/Input/Input';

const Inputs = (props) => {
    const [firstPrintArray, setFirstPrintArray] = useState("");
    const [secondPrintArray, setSecondPrintArray] = useState("");

    const trimArray = (array) => {
        const plainArray = array.split(',');
        return plainArray.map(element => {
            return element.trim();
        });
    }

    useEffect(() => {
        const trimmedArray = trimArray(props.firstInputValue);
        props.setFirstFinalSetArray(trimmedArray);
        setFirstPrintArray(`{${trimmedArray.join(', ')}}`);
    }, [props.firstInputValue]);

    useEffect(() => {
        const trimmedArray = trimArray(props.secondInputValue);
        props.setsecondFinalSetArray(trimmedArray);
        setSecondPrintArray(`{${trimmedArray.join(', ')}}`);
    }, [props.secondInputValue]);

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
        if (props.firstInputValue)
            return <FirstInputSet />
        else
            return null;
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
        if (props.secondInputValue)
            return <SecondInputSet />
        else
            return null;
    }

    return (
        <>
            <div className="inputs">
                <div className="info">Individually Input Your Sets With Comma Separated Elements Without Any Curly Or Square Brackets</div>
                <Input setValue={props.setFirstInputValue}>
                    A:
                </Input>
                {renderFirstInputSet()}
                <Input setValue={props.setSecondInputValue}>
                    B:
                </Input>
                {renderSecondInputSet()}
            </div>
        </>
    );
}

export default Inputs;
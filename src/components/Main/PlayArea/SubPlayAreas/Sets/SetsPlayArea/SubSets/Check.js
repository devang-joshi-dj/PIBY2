import React, { useState, useEffect } from 'react';
import Input from '../../../Assets/Input/Input';
import Radio from '../../../Assets/Radio/Radio';
import PhiSymbol from './Symbols/PhiSymbol';
import UnionSymbol from './Symbols/UnionSymbol';

const Complements = props => {
    const { firstFinalSetArray, secondFinalSetArray } = props;
    const [belongsToInputValue, setBelongsToInputValue] = useState('');
    const [includesToInputValue, setIncludesToInputValue] = useState('');
    const [checkOption, setCheckOption] = useState('Belongs To');
    const options = ['Belongs To', 'Includes To'];

    const getChecks = () => {

        const PrintBelongsTo = () => {
            return (
                <>
                    <Input setValue={setBelongsToInputValue} />
                </>
            );
        }

        const PrintIncludesTo = () => {
            return (
                <>
                    <Input setValue={setIncludesToInputValue} />
                </>
            );
        }

        const renderChecks = () => {
            return checkOption === 'Belongs To' ?
                <PrintBelongsTo /> :
                <PrintIncludesTo />;
        }

        return (
            <>
                <div className="info">
                    What do you want to check?
                </div>
                <Radio
                    radioOptions={options}
                    radioName="check-options"
                    radioOption={checkOption}
                    setOption={setCheckOption}
                />
                {renderChecks()}
            </>
        );
    }

    return (
        <>
            <div className="checks">
                <h2>Checks</h2>
                {getChecks()}
            </div>
        </>
    );
}

export default Complements;
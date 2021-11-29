import React, { useState } from 'react';
import Input from '../../../../Assets/Input/Input';
import Radio from '../../../../Assets/Radio/Radio';
import BelongsToSymbol from './Symbols/BelongsToSymbol';
import DoesNotBelongsToSymbol from './Symbols/DoesNotBelongsToSymbol';
import ContainsToSymbol from './Symbols/ContainsToSymbol';
import DoesNotContainsToSymbol from './Symbols/DoesNotContainsToSymbol';
import PhiSymbol from './Symbols/PhiSymbol';

const Complements = props => {
    const { firstFinalSetArray, secondFinalSetArray } = props;
    const [checkInputValue, setCheckInputValue] = useState('');
    const [checkOption, setCheckOption] = useState('Belongs To');
    const options = ['Belongs To', 'Contains To'];

    const getChecks = () => {
        // function to get to check belong to and contains to operations on firstFinalSetArray and secondFinalSetArray with a custom input

        const renderChecks = () => {
            // function to print whatever check option user has selected accordingly

            const renderSet = set => {
                // function to render any passed set accordingly to its length

                return set.length ?
                    <>{`{${set.join(', ')}}`}</> :
                    <><PhiSymbol /></>;
            }

            switch (checkOption) {
                case 'Belongs To':
                    const FirstSetBelongsTo = () => {
                        return firstFinalSetArray.indexOf(checkInputValue) !== -1 ?
                            (
                                <>
                                    {checkInputValue}
                                    <BelongsToSymbol />
                                    {renderSet(firstFinalSetArray)}
                                </>
                            ) :
                            (
                                <>
                                    {checkInputValue}
                                    <DoesNotBelongsToSymbol />
                                    {renderSet(firstFinalSetArray)}
                                </>
                            );
                    }

                    const SecondSetBelongsTo = () => {
                        return secondFinalSetArray.indexOf(checkInputValue) !== -1 ?
                            (
                                <>
                                    {checkInputValue}
                                    <BelongsToSymbol />
                                    {renderSet(secondFinalSetArray)}
                                </>
                            ) :
                            (
                                <>
                                    {checkInputValue}
                                    <DoesNotBelongsToSymbol />
                                    {renderSet(secondFinalSetArray)}
                                </>
                            );
                    }

                    return (
                        <>
                            {
                                checkInputValue ?
                                    (
                                        <>
                                            <div className="input-element">
                                                Element: {checkInputValue}
                                            </div>
                                        </>
                                    ) :
                                    null
                            }
                            {
                                checkInputValue ?
                                    (
                                        <>
                                            <div className="result">
                                                <FirstSetBelongsTo />
                                            </div>
                                        </>
                                    ) :
                                    null
                            }
                            {
                                checkInputValue ?
                                    (
                                        <>
                                            <div className="result">
                                                <SecondSetBelongsTo />
                                            </div>
                                        </>
                                    ) :
                                    null
                            }
                        </>
                    );
                case 'Contains To':
                    const filteredInputValue = [
                        ...new Set(checkInputValue
                            .split(',')
                            .map(element => {
                                return element.trim();
                            })
                            .filter(e => e))
                    ];

                    const firstMixedSet = new Set(
                        [
                            ...firstFinalSetArray,
                            ...filteredInputValue
                        ]
                    );

                    const secondMixedSet = new Set(
                        [
                            ...secondFinalSetArray,
                            ...filteredInputValue
                        ]
                    );

                    return (
                        <>
                            {
                                checkInputValue ?
                                    (
                                        <>
                                            <div className="input-element">
                                                Set: {`{${filteredInputValue.join(', ')}}`}
                                            </div>
                                        </>
                                    ) :
                                    null
                            }
                            {
                                firstMixedSet.size === firstFinalSetArray.length ?
                                    (
                                        <>
                                            <div className="result">
                                                {renderSet(filteredInputValue)}
                                                <ContainsToSymbol />
                                                {renderSet(firstFinalSetArray)}
                                            </div>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <div className="result">
                                                {renderSet(filteredInputValue)}
                                                <DoesNotContainsToSymbol />
                                                {renderSet(firstFinalSetArray)}
                                            </div>
                                        </>
                                    )
                            }
                            {
                                secondMixedSet.size === secondFinalSetArray.length ?
                                    (
                                        <>
                                            <div className="result">
                                                {renderSet(filteredInputValue)}
                                                <ContainsToSymbol />
                                                {renderSet(secondFinalSetArray)}
                                            </div>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <div className="result">
                                                {renderSet(filteredInputValue)}
                                                <DoesNotContainsToSymbol />
                                                {renderSet(secondFinalSetArray)}
                                            </div>
                                        </>
                                    )
                            }
                        </>
                    );
                default:
                    return null;
            }
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
                <Input setValue={setCheckInputValue} />
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
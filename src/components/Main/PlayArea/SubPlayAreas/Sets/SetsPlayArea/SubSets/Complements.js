import React, { useState, useEffect } from 'react';
import Input from '../../../Assets/Input/Input';
import Radio from '../../../Assets/Radio/Radio';
import PhiSymbol from './Symbols/PhiSymbol';
import UnionSymbol from './Symbols/UnionSymbol';

const Complements = props => {
    const { firstFinalSetArray, secondFinalSetArray } = props;
    const [universalOption, setUniversalOption] = useState('A⋃B');
    const [universalCustomInputValue, setUniversalCustomInputValue] = useState('');
    const [universalFinalCustomSetArray, setUniversalFinalCustomSetArray] = useState([]);
    const [options, setOptions] = useState(['A⋃B', 'R', 'Custom']);

    useEffect(() => {
        // function to set universalFinalCustomSetArray to empty

        setUniversalFinalCustomSetArray([]);
    }, [universalOption]);

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
        // function to trim universalCustomInputValue whenever universalCustomInputValue is changed

        let trimmedArray = trimArray(universalCustomInputValue);
        setUniversalFinalCustomSetArray(trimmedArray);
    }, [universalCustomInputValue]);

    useEffect(() => {
        // function to set Options accordingly with the value in the firstFinalSetArray

        return firstFinalSetArray.length ?
            (firstFinalSetArray.map(element => {
                return !isNaN(element) ?
                    setOptions(['A⋃B', 'R', 'Custom']) :
                    (
                        setOptions(['A⋃B', 'Custom']),
                        setUniversalOption('A⋃B')
                    )
            })) :
            setOptions(['A⋃B', 'R', 'Custom']);
    }, [firstFinalSetArray]);

    useEffect(() => {
        // function to set Options accordingly with the value in the secondFinalSetArray

        return secondFinalSetArray.length ?
            (secondFinalSetArray.map(element => {
                return !isNaN(element) ?
                    setOptions(['A⋃B', 'R', 'Custom']) :
                    (
                        setOptions(['A⋃B', 'Custom']),
                        setUniversalOption('A⋃B')
                    )
            })) :
            setOptions(['A⋃B', 'R', 'Custom']);
    }, [secondFinalSetArray]);

    const renderUniversalSet = () => {
        // function to render UniversalSet accordingly with the selected universalOption value

        switch (universalOption) {
            case 'A⋃B':
                const universalSet = [...new Set([...firstFinalSetArray, ...secondFinalSetArray])];
                // merging all elements from both sets and removing duplicate values

                const printUniversalSet =
                    universalSet.length !== 0 ?
                        <>{`{${universalSet.join(', ')}}`}</> :
                        <><PhiSymbol /></>;

                return (
                    <>
                        <div className="result universal-set">
                            <div className="label">
                                U:
                            </div>
                            {printUniversalSet}
                        </div>
                    </>
                );
            case 'R':
                return (
                    <>
                        <div className="result universal-set">
                            <div className="label">
                                U:
                            </div>
                            R
                        </div>
                    </>
                );
            case 'Custom':
                const customUniversalSet = [...new Set([...firstFinalSetArray, ...secondFinalSetArray, ...universalFinalCustomSetArray])];
                // merging all elements from both sets and removing duplicate values

                const printCustomUniversalSet =
                    customUniversalSet.length !== 0 ?
                        <>{`{${customUniversalSet.join(', ')}}`}</> :
                        <><PhiSymbol /></>;

                return (
                    <>
                        <div className="result universal-set">
                            <div className="label">
                                U:
                            </div>
                            {printCustomUniversalSet}
                        </div>
                    </>
                );
            default:
                return null;
        }
    }

    const renderInput = () => {
        // function to render Input when universalOption is equal to Custom

        return universalOption === 'Custom' ? (
            <Input setValue={setUniversalCustomInputValue}>
                (A<UnionSymbol />B)<UnionSymbol />
            </Input>) :
            null;
    }

    const getComplements = () => {
        // function to get complements of firstFinalSetArray and secondFinalSetArray

        const printAComplement = () => {
            // function to print complements of firstFinalSetArray

            switch (universalOption) {
                case 'A⋃B':
                    const universalUnionSet = [...new Set([...firstFinalSetArray, ...secondFinalSetArray])];
                    const universalUnionSetDifferenceA = [...universalUnionSet].filter(x =>
                        !(firstFinalSetArray).includes(x)
                    );
                    return universalUnionSetDifferenceA.length !== 0 ?
                        `{${universalUnionSetDifferenceA.join(', ')}}` :
                        <PhiSymbol />;
                case 'R':
                    return secondFinalSetArray.length ?
                        `R-{${secondFinalSetArray.join(', ')}}` :
                        <PhiSymbol />
                case 'Custom':
                    const universalCustomUnionSetDifferenceB = [...secondFinalSetArray, ...universalFinalCustomSetArray].filter(x =>
                        !(firstFinalSetArray).includes(x)
                    );
                    return universalCustomUnionSetDifferenceB.length !== 0 ?
                        `{${universalCustomUnionSetDifferenceB.join(', ')}}` :
                        <PhiSymbol />;
                default:
                    return null;
            }
        }

        const printBComplement = () => {
            // function to print complements of secondFinalSetArray

            switch (universalOption) {
                case 'A⋃B':
                    const universalUnionSet = [...new Set([...firstFinalSetArray, ...secondFinalSetArray])];
                    const universalUnionSetDifferenceB = [...universalUnionSet].filter(x =>
                        !(secondFinalSetArray).includes(x)
                    );
                    return universalUnionSetDifferenceB.length !== 0 ?
                        `{${universalUnionSetDifferenceB.join(', ')}}` :
                        <PhiSymbol />;
                case 'R':
                    return firstFinalSetArray.length ?
                        `R-{${firstFinalSetArray.join(', ')}}` :
                        <PhiSymbol />
                case 'Custom':
                    const universalCustomUnionSetDifferenceB = [...firstFinalSetArray, ...universalFinalCustomSetArray].filter(x =>
                        !(secondFinalSetArray).includes(x)
                    );
                    return universalCustomUnionSetDifferenceB.length !== 0 ?
                        `{${universalCustomUnionSetDifferenceB.join(', ')}}` :
                        <PhiSymbol />;
                default:
                    return null;
            }
        }

        return (
            <>
                <div className="info">
                    What would be your universal set?
                </div>
                <Radio
                    radioOptions={options}
                    radioName="universal-options"
                    radioOption={universalOption}
                    setOption={setUniversalOption}
                />
                {renderInput()}
                {renderUniversalSet()}
                <div className="result universal-complement-set">
                    <div className="label">
                        U':
                    </div>
                    <PhiSymbol />
                </div>
                <div className="result a-complement-set">
                    <div className="label">
                        A':
                    </div>
                    {printAComplement()}
                </div>
                <div className="result b-complement-set">
                    <div className="label">
                        B':
                    </div>
                    {printBComplement()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="complements">
                <h2>Complements</h2>
                {getComplements()}
            </div>
        </>
    );
}

export default Complements;
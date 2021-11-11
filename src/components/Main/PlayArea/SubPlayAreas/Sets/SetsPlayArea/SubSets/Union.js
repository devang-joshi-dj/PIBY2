import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import UnionSymbol from './Symbols/UnionSymbol';

const Union = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getUnion = () => {

        const printUnionSet = () => {
            const unionSet = [...new Set([...firstFinalSetArray, ...secondFinalSetArray])];
            // merging all elements from both sets and removing duplicate values

            let printSet;
            if (unionSet.length !== 0)
                printSet = <>
                    {`{${unionSet.join(', ')}}`}
                </>;
            else
                printSet = <><PhiSymbol /></>;

            return printSet;
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        A
                        <UnionSymbol />
                        B:
                    </div>
                    {printUnionSet()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="union">
                <h2>Union</h2>
                {getUnion()}
            </div>
        </>
    );
}

export default Union;
import React from 'react';

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
                printSet = <>&#8709;</>;

            return printSet;
        }

        return (
            <>
                <div className="result">
                    <div className="label">A&#8899;B:</div>
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
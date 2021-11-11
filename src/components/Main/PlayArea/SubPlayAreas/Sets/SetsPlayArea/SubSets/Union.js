import React from 'react';

const Union = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getUnion = () => {

        const unionSet = () => {
            let unionSet = [...firstFinalSetArray, ...secondFinalSetArray] // merging all elements from both sets
            unionSet = unionSet.filter(e => e); // removing empty values
            unionSet = [...new Set(unionSet)]; // removing duplicate values

            let printArray;
            if (unionSet.length !== 0)
                printArray = <>{`{${unionSet.join(', ')}}`}</>;
            else
                printArray = <>&#8709;</>;

            return printArray
        }

        return (
            <>
                <div className="result">
                    <div className="label">A&#8746;B:</div>
                    {unionSet()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="intersection">
                <h2>Union</h2>
                {getUnion()}
            </div>
        </>
    );
}

export default Union;
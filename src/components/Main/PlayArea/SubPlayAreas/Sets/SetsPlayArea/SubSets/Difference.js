import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import DifferenceSymbol from './Symbols/DifferenceSymbol';

const Difference = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getDifference = () => {

        const printADifferenceB = () => {
            const difference = [...firstFinalSetArray].filter(x =>
                !(secondFinalSetArray).includes(x)
            ); // filtering all elements of first set which are not in second set

            let printSet;
            if (difference.length !== 0)
                printSet = <>
                    {`{${difference.join(', ')}}`}
                </>;
            else
                printSet = <><PhiSymbol /></>;

            return printSet;
        }

        const printBDifferenceA = () => {
            let difference = [...secondFinalSetArray].filter(x =>
                !(firstFinalSetArray).includes(x)
            ); // filtering all elements of second set which are not in first set

            let printSet;
            if (difference.length !== 0)
                printSet = <>{`{${difference.join(', ')}}`}</>;
            else
                printSet = <>&#8709;</>;

            return printSet
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        A
                        <DifferenceSymbol />
                        B:
                    </div>
                    {printADifferenceB()}
                </div>
                <div className="result">
                    <div className="label">
                        B
                        <DifferenceSymbol />
                        A:
                    </div>
                    {printBDifferenceA()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="difference">
                <h2>Difference</h2>
                {getDifference()}
            </div>
        </>
    );
}

export default Difference;
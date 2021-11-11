import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import IntersectionSymbol from './Symbols/IntersectionSymbol';

const Intersection = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getIntersection = () => {

        const printIntersectedSet = () => {
            const intersectedSet = firstFinalSetArray.filter(value =>
                secondFinalSetArray.includes(value)
            ); // filtering common elements from both sets

            let printSet;
            if (intersectedSet.length !== 0)
                printSet = <>
                    {`{${intersectedSet.join(', ')}}`}
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
                        <IntersectionSymbol />
                        B:
                    </div>
                    {printIntersectedSet()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="intersection">
                <h2>Intersection</h2>
                {getIntersection()}
            </div>
        </>
    );
}

export default Intersection;
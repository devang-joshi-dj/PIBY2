import React from 'react';

const Intersection = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getIntersection = () => {

        const intersectedSet = () => {
            let intersectedSet = firstFinalSetArray.filter(value =>
                secondFinalSetArray.includes(value)
            ); // filtering common elements from both sets
            intersectedSet = intersectedSet.filter(e => e); // removing empty values
            intersectedSet = [...new Set(intersectedSet)]; // removing duplicate values

            let printArray;
            if (intersectedSet.length !== 0)
                printArray = <>{`{${intersectedSet.join(', ')}}`}</>;
            else
                printArray = <>&#8709;</>;

            return printArray
        }

        return (
            <>
                <div className="result">
                    <div className="label">A&#8745;B:</div>
                    {intersectedSet()}
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
import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import SymmetricDifferenceSymbol from './Symbols/SymmetricDifferenceSymbol';

const SymmetricDifference = props => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getSymmetricDifference = () => {

        const printSymmetricDifferenceSet = () => {
            const symmetricDifferenceSet = [
                ...firstFinalSetArray.filter(x => !secondFinalSetArray.includes(x)),
                ...secondFinalSetArray.filter(x => !firstFinalSetArray.includes(x))
            ]; // filtering union + interesection of A and B

            return symmetricDifferenceSet.length !== 0 ?
                <>{`{${symmetricDifferenceSet.join(', ')}}`}</> :
                <><PhiSymbol /></>;
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        A
                        <SymmetricDifferenceSymbol />
                        B:
                    </div>
                    {printSymmetricDifferenceSet()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="symmetric-difference">
                <h2>Symmetric Difference</h2>
                {getSymmetricDifference()}
            </div>
        </>
    );
}

export default SymmetricDifference;
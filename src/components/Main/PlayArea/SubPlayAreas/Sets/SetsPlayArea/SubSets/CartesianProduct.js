import React from 'react';
import PhiSymbol from './Symbols/PhiSymbol';
import ProductSymbol from './Symbols/ProductSymbol';

const CartesianProduct = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getCartesianProduct = () => {

        const printABCartesianProduct = () => {

            const cartesianProduct = [];
            for (let i = 0; i < firstFinalSetArray.length; i++) {
                for (let j = 0; j < secondFinalSetArray.length; j++) {
                    cartesianProduct.push(
                        [firstFinalSetArray[i]].concat(secondFinalSetArray[j])
                    );
                };
            }; // getting the cartesian product of both sets (AB)

            let printSet;
            if (cartesianProduct.length !== 0) {
                printSet = <>
                    {`{${cartesianProduct.map(array => `(${array})`).join(', ')}}`}
                </>;
            }
            else
                printSet = <><PhiSymbol /></>;

            return printSet;
        }

        const printBACartesianProduct = () => {

            const cartesianProduct = [];
            for (let i = 0; i < secondFinalSetArray.length; i++) {
                for (let j = 0; j < firstFinalSetArray.length; j++) {
                    cartesianProduct.push(
                        [secondFinalSetArray[i]].concat(firstFinalSetArray[j])
                    );
                };
            }; // getting the cartesian product of both sets (BA)

            let printSet;
            if (cartesianProduct.length !== 0) {
                printSet = <>
                    {`{${cartesianProduct.map(array => `(${array})`).join(', ')}}`}
                </>;
            }
            else
                printSet = <><PhiSymbol /></>;

            return printSet;
        }

        return (
            <>
                <div className="result">
                    <div className="label">
                        A
                        <ProductSymbol />
                        B:
                    </div>
                    {printABCartesianProduct()}
                </div>
                <div className="result">
                    <div className="label">
                        B
                        <ProductSymbol />
                        A:
                    </div>
                    {printBACartesianProduct()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="cartesian-product">
                <h2>Cartesian Product</h2>
                {getCartesianProduct()}
            </div>
        </>
    );
}

export default CartesianProduct;
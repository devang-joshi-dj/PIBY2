import React from 'react';

const CartesianProduct = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;

    const getCartesianProduct = () => {

        const printCartesianProduct = () => {

            const cartesianProduct = [];
            for (let i = 0; i < firstFinalSetArray.length; i++) {
                for (let j = 0; j < secondFinalSetArray.length; j++) {
                    cartesianProduct.push(
                        [firstFinalSetArray[i]].concat(secondFinalSetArray[j])
                    );
                };
            }; // getting the cartesian product of both sets

            let printSet;
            if (cartesianProduct.length !== 0) {
                printSet = <>
                    {`{${cartesianProduct.map(array => `(${array})`).join(', ')}}`}
                </>;
            }
            else
                printSet = <>&#8709;</>;

            return printSet;
        }

        return (
            <>
                <div className="result">
                    <div className="label">AXB:</div>
                    {printCartesianProduct()}
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
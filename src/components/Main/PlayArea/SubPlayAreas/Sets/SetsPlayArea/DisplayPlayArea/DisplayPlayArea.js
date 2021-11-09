import React from 'react';
import Intersection from './SubPlayAreas/Intersection';
import Union from './SubPlayAreas/Union';
import Difference from './SubPlayAreas/Difference';
import CartesianProduct from './SubPlayAreas/CartesianProduct';
import SymmetricDifference from './SubPlayAreas/SymmetricDifference';

const DisplayPlayArea = (props) => {

    const switchRender = (selectedValue) => {
        switch (selectedValue) {
            case 'intersection':
                return <Intersection />;
            case 'union':
                return <Union />;
            case 'difference':
                return <Difference />;
            case 'cartesian-product':
                return <CartesianProduct />;
            case 'symmetric-difference':
                return <SymmetricDifference />;
            default:
                break;
        }
    }

    return (
        <>
            {switchRender(props.selectedValue)}
        </>
    );
}

export default DisplayPlayArea;
import React, { useState } from 'react';
import './determinants.css';
import Heading from '../../../../Miscs/Heading/Heading';
import Selects from './SubDeterminants/Selects/Selects';
import DeterminantsPlayAreas from './SubDeterminants/DeterminantsPlayArea/DeterminantsPlayArea';

const Determinants = () => {
    const [rowsAndColumnsSelectedValue, setRowsAndColumnsSelectedValue] = useState('');


    const renderPlayArea = () => {
        // function to render PlayArea when rowsAndColumnsSelectedValue both are set to any value

        return rowsAndColumnsSelectedValue ?
            (
                <>
                    <DeterminantsPlayAreas
                        rowsAndColumnsSelectedValue={rowsAndColumnsSelectedValue}
                    />
                </>
            ) :
            null;
    }

    return (
        <>
            <div className="determinants">
                <Heading>Determinants</Heading>
                <Selects
                    rowsAndColumnsSelectedValue={rowsAndColumnsSelectedValue}
                    setRowsAndColumnsSelectedValue={setRowsAndColumnsSelectedValue}
                />
                {renderPlayArea()}
            </div>
        </>
    );
}

export default Determinants;
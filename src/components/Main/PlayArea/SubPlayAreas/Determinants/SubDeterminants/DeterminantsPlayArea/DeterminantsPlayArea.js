import React, { useState } from 'react';
import Select from '../../../Assets/Select/Select';
import Matrix from '../../../Assets/Matrix/Matrix';
import FindDeterminant from './SubDeterminantsPlayAreas/FindDeterminant';
// import FindMinors from './SubDeterminantsPlayAreas/FindMinors';
// import FindCoFactors from './SubDeterminantsPlayAreas/FindCoFactors';
import Multiplication from './SubDeterminantsPlayAreas/Multiplication';
import Division from './SubDeterminantsPlayAreas/Division';

const DeterminantsPlayArea = props => {
    const { rowsAndColumnsSelectedValue } = props;
    const [selectedOperation, setSelectedOperation] = useState();
    const [matrix, setMatrix] = useState([]);

    const operations = [
        { value: 'FindDeterminant', label: 'Find Determinant' },
        // { value: 'FindMinors', label: 'Find Minors' },
        // { value: 'FindCoFactors', label: 'Find Co-factors' },
        { value: 'Multiplication', label: 'Multiplication' },
        { value: 'Division', label: 'Division' },
    ];

    const renderMatrixInput = () => {
        // function to render Matrix Input according to rowsAndColumnsSelectedValue when they are set to any value

        return rowsAndColumnsSelectedValue ?
            (
                <>
                    <div className="matrix-input">
                        <div className="label">
                            Input your Matrix:
                        </div>
                        <Matrix
                            matrix={matrix}
                            setMatrix={setMatrix}
                            rowsSelectedValue={rowsAndColumnsSelectedValue}
                            columnsSelectedValue={rowsAndColumnsSelectedValue}
                        />
                    </div>
                </>
            ) :
            null;
    }

    const renderSubDeterminantsPlayAreas = () => {
        // function to render SubDeterminantsPlayAreas when selectedOperation is set to any value

        const SubDeterminantsPlayAreas = [
            FindDeterminant,
            // FindMinors,
            // FindCoFactors,
            Multiplication,
            Division,
        ];

        return SubDeterminantsPlayAreas.map((SubDeterminantsPlayAreas, index) => {
            return operations[index].value === selectedOperation ?
                <SubDeterminantsPlayAreas
                    matrix={matrix}
                    key={index}
                    rowsAndColumnsSelectedValue={rowsAndColumnsSelectedValue}
                /> :
                null;
        });
    }

    return (
        <>
            <div className="determinants-play-area">
                {renderMatrixInput()}
                <Select
                    class="determinants-select"
                    options={operations}
                    selectedValue={selectedOperation}
                    setSelectedValue={setSelectedOperation}
                />
                {renderSubDeterminantsPlayAreas()}
            </div>
        </>
    );
}

export default DeterminantsPlayArea;
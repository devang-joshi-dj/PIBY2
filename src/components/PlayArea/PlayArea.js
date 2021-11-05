import React from 'react';
import './play-area.css';
import Sets from './Sets/Sets';
import Matrices from './Matrices/Matrices';
import Mensuration from './Mensuration/Mensuration';
import Probability from './Probability/Probability';
import Functions from './Functions/Functions';
import PermutationsAndCombinations from './PermutationsAndCombinations/PermutationsAndCombinations';

const PlayArea = () => {
    return (
        <>
            <div className="play-area">
                <Sets />
                <Matrices />
                <Mensuration />
                <Probability />
                <Functions />
                <PermutationsAndCombinations />
            </div>
        </>
    );
}

export default PlayArea;
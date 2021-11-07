import React from 'react';
import './play-area.css';
import Sets from './SubPlayAreas/Sets/Sets';
import Matrices from './SubPlayAreas/Matrices/Matrices';
import Mensuration from './SubPlayAreas/Mensuration/Mensuration';
import Probability from './SubPlayAreas/Probability/Probability';
import Functions from './SubPlayAreas/Functions/Functions';
import PermutationsAndCombinations from './SubPlayAreas/PermutationsAndCombinations/PermutationsAndCombinations';

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
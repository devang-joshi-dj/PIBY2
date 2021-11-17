import React from 'react';
import './play-area.css';
import { CONTENTS } from '../Contents/contents.json';
import Sets from './SubPlayAreas/Sets/Sets';
import Matrices from './SubPlayAreas/Matrices/Matrices';
import Mensuration from './SubPlayAreas/Mensuration/Mensuration';
import Probability from './SubPlayAreas/Probability/Probability';
import Functions from './SubPlayAreas/Functions/Functions';
import PermutationsAndCombinations from './SubPlayAreas/PermutationsAndCombinations/PermutationsAndCombinations';

const PlayArea = props => {
    const { displaySubPlayArea, playAreaRef } = props;

    const renderSubPlayArea = () => {
        const SubPlayAreas = [
            Sets,
            Matrices,
            Mensuration,
            Probability,
            Functions,
            PermutationsAndCombinations,
        ];

        return SubPlayAreas.map((SubPlayArea, index) => {
            return CONTENTS[index].name === displaySubPlayArea ?
                <SubPlayArea key={index} /> :
                null;
        });
    }

    return (
        <>
            <div
                className="play-area"
                ref={playAreaRef}
            >
                {renderSubPlayArea()}
            </div>
        </>
    );
}

export default PlayArea;
import React from 'react';
import Contents from './Contents/Contents';
import PlayArea from './PlayArea/PlayArea';

const Main = props => {
    const { displaySubPlayArea, playAreaRef, setDisplaySubPlayArea } = props;

    const renderPlayArea = () => {
        return displaySubPlayArea != null ?
            <PlayArea
                playAreaRef={playAreaRef}
                displaySubPlayArea={displaySubPlayArea} /> :
            null;
    }

    return (
        <>
            <div className="main">
                <Contents
                    setDisplaySubPlayArea={setDisplaySubPlayArea}
                />
                {renderPlayArea()}
            </div>
        </>
    );
}

export default Main;
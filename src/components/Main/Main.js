import React, { useState } from 'react';
import Contents from './Contents/Contents';
import PlayArea from './PlayArea/PlayArea';

const Main = () => {
    const [displaySubPlayArea, setDisplaySubPlayArea] = useState(null);
    const [displayPlayArea, setDisplayPlayArea] = useState(false);

    const renderPlayArea = () => {
        if (displayPlayArea) {
            return <PlayArea
                displaySubPlayArea={displaySubPlayArea}
            />
        } else return null
    }

    return (
        <>
            <div className="main">
                <Contents
                    setDisplaySubPlayArea={setDisplaySubPlayArea}
                    setDisplayPlayArea={setDisplayPlayArea}
                />
                {renderPlayArea()}
            </div>
        </>
    );
}

export default Main;
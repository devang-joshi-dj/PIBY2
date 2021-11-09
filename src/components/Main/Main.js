import React from 'react';
import Contents from './Contents/Contents';
import PlayArea from './PlayArea/PlayArea';

const Main = (props) => {

    const renderPlayArea = () => {
        if (props.displaySubPlayArea != null) {
            return <PlayArea
                displaySubPlayArea={props.displaySubPlayArea}
            />
        } else return null
    }

    return (
        <>
            <div className="main">
                <Contents
                    setDisplaySubPlayArea={props.setDisplaySubPlayArea}
                />
                {renderPlayArea()}
            </div>
        </>
    );
}

export default Main;
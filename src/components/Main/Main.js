import React from 'react';
import Contents from './Contents/Contents';
import PlayArea from './PlayArea/PlayArea';

const Main = props => {
	const { displaySubPlayArea, playAreaRef, setDisplaySubPlayArea } = props;

	const renderPlayArea = () => {
		// function to render PlayArea when displaySubplayArea prop is set to any value
		return displaySubPlayArea != null ? (
			<PlayArea playAreaRef={playAreaRef} displaySubPlayArea={displaySubPlayArea} />
		) : null;
	};

	return (
		<>
			<div className="main">
				<Contents setDisplaySubPlayArea={setDisplaySubPlayArea} />
				{renderPlayArea()}
			</div>
		</>
	);
};

export default Main;

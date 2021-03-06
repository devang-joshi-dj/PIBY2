import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
	const [displaySubPlayArea, setDisplaySubPlayArea] = useState(null);
	const playAreaRef = useRef(null);

	const scrollToPlayArea = () => {
		// function to scroll to PlayArea

		playAreaRef.current.scrollIntoView();
	};

	useEffect(() => {
		// function to scrollDown to PlayArea when displaySubPlayArea values is changed

		return displaySubPlayArea ? scrollToPlayArea() : null;
	}, [displaySubPlayArea]);

	return (
		<>
			<div className="App">
				<Header setDisplaySubPlayArea={setDisplaySubPlayArea} />
				<Main
					displaySubPlayArea={displaySubPlayArea}
					setDisplaySubPlayArea={setDisplaySubPlayArea}
					playAreaRef={playAreaRef}
				/>
				<Footer setDisplaySubPlayArea={setDisplaySubPlayArea} />
			</div>
		</>
	);
};

export default App;

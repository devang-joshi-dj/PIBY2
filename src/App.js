import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  const [displaySubPlayArea, setDisplaySubPlayArea] = useState(null);
  const playAreaRef = useRef(null);

  const scrollToPlayArea = () => {
    playAreaRef.current.scrollIntoView();
  }

  useEffect(() => {
    if (displaySubPlayArea)
      scrollToPlayArea();
  }, [displaySubPlayArea]);

  return (
    <>
      <div className="App">
        <Header
          setDisplaySubPlayArea={setDisplaySubPlayArea}
        />
        <Main
          displaySubPlayArea={displaySubPlayArea}
          setDisplaySubPlayArea={setDisplaySubPlayArea}
          playAreaRef={playAreaRef}
        />
        <Footer
          setDisplaySubPlayArea={setDisplaySubPlayArea}
        />
      </div>
    </>
  );
}

export default App;

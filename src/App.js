import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  const [displaySubPlayArea, setDisplaySubPlayArea] = useState(null);

  return (
    <>
      <div className="App">
        <Header
          setDisplaySubPlayArea={setDisplaySubPlayArea}
        />
        <Main
          displaySubPlayArea={displaySubPlayArea}
          setDisplaySubPlayArea={setDisplaySubPlayArea}
        />
        <Footer
          setDisplaySubPlayArea={setDisplaySubPlayArea}
        />
      </div>
    </>
  );
}

export default App;

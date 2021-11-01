import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import PlayArea from './components/PlayArea/PlayArea';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Contents />
        <PlayArea />
        <Footer />
      </div>
    </>
  );
}

export default App;

import logo from './MosesBonilla.png'; /*I could not find nor take a suitable image of myself, so I used this image instead*/
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        My name is Moses Bonilla and I'm going to master React!</p>
        <a
          className="App-link"
          href="https://github.com/MosesBonilla/mosesbonilla.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;

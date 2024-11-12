import logo from './logo.svg';
import './App.css';
import Component from './component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jessie Learning React.
        </p>
        <Component/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am excited!
        </a>
      </header>
    </div>
  );
}

export default App;

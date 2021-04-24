import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Afcomponent from './Afcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name="Andrey" />
        <Ccomponent number="456" numbers={[2,3,5,6]} />
        <Afcomponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

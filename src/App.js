import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Ccomponent from './Ccomponent';
import Afcomponent from './Afcomponent';
import Counter from './Counter';
import NewForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import ToDoList from './ToDoList';
import TestApi from './TestApi';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewForm />
        <FlavorForm />
        <Reservation />

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/counter">Counter</Link>
                </li>
                <li>
                  <Link to="/todo">ToDoList</Link>
                </li>
                <li>
                  <Link to="/cocktails">Cocktails</Link>
                </li>
                <li>
                  <Link to="/clock">Clock</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/Clock">
                <Clock />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/todo">
                <ToDoList />
              </Route>
              <Route path="/cocktails">
                <TestApi />
              </Route>
              <Route path="/">
                <Ccomponent number="456" numbers={[2,3,5,6]} />
              </Route>
            </Switch>
          </div>
        </Router>

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

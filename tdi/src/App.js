import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Config from './components/Config';
import About from './components/About';


function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Config">Config</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home name = "lll" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Config">
              <Config/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;

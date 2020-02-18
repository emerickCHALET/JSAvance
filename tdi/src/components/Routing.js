import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Config from './Config';
import About from './About';
import FindNumber from './FindNumber';
import Score from './Score';

export default class Routing extends React.Component {
    render() {
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
                            <li>
                                <Link to="/FindNumber">Find Number</Link>
                            </li>
                            <li>
                                <Link to="/Score">Score</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/Config">
                            <Config/>
                        </Route>
                        <Route path="/FindNumber">
                            <FindNumber/>
                        </Route>
                        <Route path="/Score">
                            <Score/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

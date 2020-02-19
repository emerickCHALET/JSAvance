import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Scoreboard from './Scoreboard';
import About from './About';
import Gameboard from './Gameboard';

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
                                <Link to="/Gameboard">Enter game</Link>
                            </li>
                            <li>
                                <Link to="/Scoreboard">Score Board</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <Home name='test'/>
                        </Route>
                        <Route path="/About">
                            <About/>
                        </Route>
                        <Route path="/Gameboard">
                            <Gameboard />
                        </Route>
                        <Route path="/Scoreboard">
                            <Scoreboard />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

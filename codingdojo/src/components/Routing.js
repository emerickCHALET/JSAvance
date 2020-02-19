import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Scoreboard from './Scoreboard'
import About from './About';
import Board from './Board';

export default class Routing extends React.Component {

    constructor(props) {
        super(props);
        this.test = true;
    }

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
                            {this.test &&
                                <li>
                                    <Link to="/Board">Enter game</Link>
                                </li>
                            }
                            <li>
                                <Link to="/Scoreboard">Scoreboard</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/About">
                            <About/>
                        </Route>
                        <Route path="/Board">
                            <Board />
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

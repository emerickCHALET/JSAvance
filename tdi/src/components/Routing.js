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

export default class Routing extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            value: ''
        };
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
                            <li>
                                <Link to="/Config">Config</Link>
                            </li>
                            <li>
                                <Link to="/FindNumber">Find Number</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <Home name={this.props.users}/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/Config">
                            <Config name={(e) => this._getName(e)}/>
                        </Route>
                        <Route path="/FindNumber">
                            <FindNumber/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

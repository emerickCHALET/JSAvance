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
import {connect} from "react-redux";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <head>

                </head>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="hey">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hey">About</Link>
                            </li>
                            {this.props.users !== "" &&
                                <li>
                                    <Link to="/Board" className="hey">Enter game</Link>
                                </li>
                            }
                            <li>
                                <Link to="/Scoreboard" className="hey">Scoreboard</Link>
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
                        {this.props.users !== "" ?
                            <Route path="/Board">
                                <Board/>
                            </Route>
                            :
                            <Route path="/">
                                <Home/>
                            </Route>
                        }
                        <Route path="/Scoreboard">
                            <Scoreboard />
                        </Route>
                    </Switch>
                    <div className="area">
                        <ul className="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(Routing)

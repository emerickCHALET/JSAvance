import React from 'react';
import { connect } from 'react-redux';

import {addUser} from "../Store/reducers/actions";

class Home extends React.Component {
    addUser(event) {
        event.preventDefault();
        let name = event.target[0].value;
        console.log(name);
        this.props.addUser(name);
    }

    render() {
        return (
            <div>
                <h2> Memory Game</h2>
                
                <p> Enter your name: </p>
                <form onSubmit = {event => this.addUser(event)} >
                    <input type="text"></input>
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        addUser: users => {
            dispatch(addUser(users))
        }
    };
}

export default connect(null, mapDispatchtoProps)(Home)
import React from 'react';
import {connect} from "react-redux";

import {addUser} from "../redux/actions";

class Config extends React.Component {
    addUser(event) {
        event.preventDefault();
        let name = event.target[0].value;
        console.log(name);
        this.props.addUser(name);
    }

    render() {
        return (
            <form onSubmit = {event => this.addUser(event)}>
              <input type='text'/>
              <button>Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: users => {
            dispatch(addUser(users))
        }
    };
};


export default connect(null, mapDispatchToProps)(Config)
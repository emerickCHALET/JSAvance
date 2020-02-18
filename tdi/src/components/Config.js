import React from 'react';
import {getUsers} from "../redux/actions";
import {connect} from "react-redux";


class Config extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
    }

    getUser(event) {
        event.preventDefault();
        let name = event.target[0].value;
        console.log(event.target[0].value);
        this.props.getUsers(name)
    }

    render() {
        return (
            <div>
            <form onSubmit = {event => this.getUsers(event)}>
              <input type='text'></input>
              <button>Submit</button>
            </form>
            </div>
          );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: users => {
            dispatch(getUsers(users))
        }
    };
};

export default connect(null, mapDispatchToProps)(Config)
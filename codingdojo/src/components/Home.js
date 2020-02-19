import React from 'react';

import { connect } from 'react-redux';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h2> Home </h2>
                <form>
                    <input type="text"></input>
                    <button>Submit</button>
                </form>
                <p> HELLO {this.props.users} </p>
            </div>
        );
    }
}

/*
const mapDispatchToProps = dispatch => {
    return {
        addUser: users => {
            dispatch(addUser(users))
        }
    };
};


export default connect(null, mapDispatchToProps)(Config)*/

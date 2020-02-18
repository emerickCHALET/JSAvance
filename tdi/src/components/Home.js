import React from 'react';

import { connect } from 'react-redux';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2> Home </h2>
                <p> HELLO {this.props.users} </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
};


export default connect(mapStateToProps)(Home)
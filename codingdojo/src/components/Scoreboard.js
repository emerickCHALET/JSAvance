import React from 'react';
import {connect} from 'react-redux';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p> en construction </p>
        )
    }
}

const mapStateToProps = state => {
    return {
        scores: state.scores
    }
}

export default connect(mapStateToProps)(Scoreboard)
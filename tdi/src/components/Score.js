import React from "react";

import {connect} from "react-redux";

class Score extends React.Component {

    render() {
        const { scores } = this.props;

        return (
            <table className="style"><thead><tr><th>Name</th><th>Number</th><th>Attempts</th></tr></thead><tbody>
            {scores.map((score,index) => {
                return (
                    <tr key={index}>
                        <td>{score.name}</td>
                        <td>{score.number}</td>
                        <td>{score.turn}</td>
                    </tr>
                );
            })}
            </tbody></table>
        );
    }
}

const mapStateToProps = state => {
    return {
        scores: state.scores
    }
};

export default connect(mapStateToProps)(Score)
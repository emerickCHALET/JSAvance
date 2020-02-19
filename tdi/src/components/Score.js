import React from "react";

import {connect} from "react-redux";
import 'firebase/firestore';
import {getScore} from "../firebase/StoreScore";

class Score extends React.Component {

    render() {
        // const { scores } = this.props;

        /* return (
            <table className="style"><thead><tr><th>Nom</th><th>Number</th><th>Turn</th></tr></thead><tbody>
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
        ); */
        getScore();

        return (
            <table className="style"><thead><tr><th>Nom</th><th>Number</th><th>Turn</th></tr></thead><tbody>
            {this.props.scores.map((score,index) =>
                <tr key={{index}}>
                    <td>{score.name}</td>
                    <td>{score.number}</td>
                    <td>{score.turn}</td>
                </tr>)}
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
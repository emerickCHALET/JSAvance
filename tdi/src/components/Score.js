import React from "react";
import {connect} from "react-redux";

import firebase from '../firebase/firebase'
import 'firebase/firestore';

class Score extends React.Component {

    constructor(props) {
        super(props);
        const db = firebase.firestore();
        this.ref = db.collection('scores');
        this.state = {
            scores: []
        };
    }

    updateScore = (querySnapshot) => {
        const scores = [];
        querySnapshot.forEach((doc) => {
            const {name, number, attempts} = doc.data();
            scores.push({
                key: doc.id,
                doc, //Document snapshot
                name,
                number,
                attempts,
            });
            this.state({
                scores
            })
        });
    }

    render() {
        const {scores} = this.state;
        return (
            <table className="style"><thead><tr><th>Name</th><th>Number</th><th>Attempts</th></tr></thead><tbody>
            {scores.map((score) => {
                return (
                    <tr key={score.key}>
                        <td>{score.name}</td>
                        <td>{score.number}</td>
                        <td>{score.attempts}</td>
                    </tr>
                );
            })}
            </tbody></table>

        );
    }
}

export default Score;
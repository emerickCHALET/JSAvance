import React from 'react';
import {connect} from 'react-redux';

class Scoreboard extends React.Component {

    /**
     * Renvoi le tableau des scores
     * @returns {HTML}
     */
    render() {
        const {scores} = this.props;
        return (
            <div>
                <h2>ScoreBoard</h2>
                <table className="style" align="center"><thead><tr><th className="result">Nom</th><th className="result">Victory</th><th className="result">Level</th></tr></thead><tbody>
                {scores.map((scoreboard,index) => {
                    return (
                        <tr key={index}>
                            <td>{scoreboard.name}</td>
                            <td>{scoreboard.victory}</td>
                            <td>{scoreboard.level}</td>
                        </tr>
                    );
                })}
                </tbody></table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        scores: state.scores
    }
};

export default connect(mapStateToProps)(Scoreboard)
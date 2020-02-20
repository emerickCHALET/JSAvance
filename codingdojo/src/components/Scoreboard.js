import React from 'react';
import {connect} from 'react-redux';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {scores} = this.props;

        return (
            <table className="style"><thead><tr><th>Nom</th><th>victory</th><th>level</th></tr></thead><tbody>
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
        );
    }
}

const mapStateToProps = state => {
    return {
        scores: state.scores
    }
}

export default connect(mapStateToProps)(Scoreboard)
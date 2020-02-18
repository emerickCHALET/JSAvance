import React from 'react';
import FindNumber from './FindNumber';

class Score extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
           <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Name :</th>
                            <th>Game status :</th>
                            <th>Attempts :</th>
                        </tr>
                        </thead>
                    </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    } 
} 

const mapDispatchToProps = dispatch => {
    return {
        addGame: games => {dispatch(addGame(games))}
    }
}

export default Score;
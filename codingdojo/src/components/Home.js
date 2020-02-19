import React from 'react';

import { connect } from 'react-redux';

class Home extends React.Component {

    addUser(event) {
        event.preventDefault();
        let name = event.target[0].value;
        console.log(name);
        this.props.addUser(name);
    }

    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <form onSubmit = {event => this.addUser(event)}>
                    <input type="text"></input>
                    <button>Submit</button>
                </form>
                <p> Hello {this.props.name} </p>
                <h2>Rules of the game</h2>
                <p>The rules of this game are simple.</p>
                <p>During 30 sec , you will see many case in red an others in black. You need to remember where are the red cases.</p>
                <p>After this time, your goal will be to click where the red case were. If you succeed, you won and will have a new board with a new game and you take 1 points.</p>
                <p>If you loose, the game restart but your score will be added to the board of results and you will can see your classment.</p>
                <p>!!!Don't forgot to enter your Name!!!</p>
                <p>Good Luck.</p>
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


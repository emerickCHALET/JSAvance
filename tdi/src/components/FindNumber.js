import React from 'react';
import { connect } from 'react-redux';
import { addScore } from "../redux/actions"

class FindNumber extends React.Component {

    constructor(props) {
        super(props);
        this.number = 0;
        this.random = this._randomNumber();
        this.turn = 1;
        this.result = false;
    }
    /*
    * Get the result of the game
    */

    addScore() {
        this.props.addScore ({
            name: this.props.name,
            number: this.number,
            attempt: this.turn
        })
    }
    
   _randomNumber() {
        this.random = Math.floor(Math.random() * 100);
        console.log(this.random);
     }


    _checkNumber(number) {
        if (number > this.random) {
            console.log('Plus petit');
            this.turn++;
            console.log(this.turn);
        }
        else if (number < this.random) {
            console.log('Plus grand');
            this.turn++;
            console.log(this.turn);
        }
        else {
            console.log('Gagné')
            this.turn++;
            this.status = true;
            console.log(this.turn);
            this.addScore();
        }
    } 

    /*
    * Form actions
    */
    submit(event) {
        event.preventDefault();
        this.number = event.target[0].value;
        this._checkNumber(this.number);
        this.turn += 1
    }

    _restart(event) { 
        event.preventDefault();
        console.log("Perdu");
    }


    render() {
        return (
        <div>
            <form onSubmit = {event => this.submit(event)} >
            <input type="text"></input>
            <button>Send</button>
            <button>Restart</button>
            </form>
        </div>
    );
}
}

const mapStateToProps = state => {
    return {
        scores: state.scores,
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addScore: score => {
            dispatch(addScore(score))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FindNumber);
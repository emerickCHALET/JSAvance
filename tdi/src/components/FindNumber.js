import React from 'react';
import { connect } from 'react-redux';
import { addScore} from "../Store/Reducers/action";


class FindNumber extends React.Component {

    constructor(props) {
        super(props);
        this.randomNumber = this._generateNumber();
        this.number = 0;
        this.turn = 1;
        this.status = false;

        this.state = {
            context: ""
        }
    }

    addScore() {
        this.props.addScore({
            name: this.props.users,
            number: this.number,
            turn: this.turn
        });
    }

    _generateNumber(){
        let rdNumber = Math.floor(Math.random() * 100);
        console.log(rdNumber);
        return rdNumber;
    }

    _submitNumber(event) {
        event.preventDefault();
        this.number = event.target[0].value;
        this._checkNumberValid(this.number);
        this.turn += 1;
    }

    _restartGame(event) {
        event.preventDefault();
        this.setState({...this.state, context: "Perdu"});
        console.log("Perdu");
        this.turn = -1;
        this.addScore();

        /* this.randomNumber = this._generateNumber();
        this.turn = 0; */
    }

    _checkNumberValid(value){

        if(value < this.randomNumber){
            this.setState({...this.state, context: "C'est plus grand"});
            console.log("C'est plus grand");
            console.log(this.turn);
        }
        else if(value > this.randomNumber){
            this.setState({...this.state, context: "C'est plus petit"});
            console.log("C'est plus petit");
            console.log(this.turn);
        }
        else{
            this.setState({...this.state, context: "Gagné"});
            console.log("Gagné");
            this.status = true;
            this.addScore();

            /* this.randomNumber = this._generateNumber();
            this.turn = 0; */
        }
    }

    render() {
        return (
            <div>
                <h2> Find the random number </h2>
                <form onSubmit = {event => this._submitNumber(event)}>
                    <input type='number'/>
                    <button>Submit</button>
                </form>
                <button onClick={event => this._restartGame(event)}>Recommencer</button>
                <br/>
                <p>{this.state.context}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(FindNumber)

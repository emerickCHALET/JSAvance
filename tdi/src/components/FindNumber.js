import React from 'react';

export default class FindNumber extends React.Component {

    constructor(props) {
        super(props);
        this.randomNumber = 0;
        this.number = 0;
        this.turn = 1;
    }

    _generateNumber(){
        this.randomNumber = Math.floor(Math.random() * 100);
        console.log(this.randomNumber);
    }

    _submitNumber(event) {
        event.preventDefault();
        this.number = event.target[0].value;
        this._checkNumberValid(this.number);
        this.turn += 1;
    }

    _restartGame(event) {
        event.preventDefault();
        console.log("Perdu");
    }

    _checkNumberValid(value){

        if(value < this.randomNumber){
            console.log("C'est plus grand");
            console.log(this.turn);
        }
        else if(value > this.randomNumber){
            console.log("C'est plus petit");
            console.log(this.turn);
        }
        else{
            console.log("Gagné");
            console.log(this.turn);
        }

    }

    render() {
        return (
            <div>
                {this._generateNumber()}
                <h2> Find the random number </h2>
                <form onSubmit = {event => this._submitNumber(event)}>
                    <input type='number'/>
                    <button>Submit</button>
                </form>
                <button onClick={event => this._restartGame(event)}>Recommencer</button>
            </div>
        );
    }
}

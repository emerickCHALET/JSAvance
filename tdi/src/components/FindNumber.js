import React from 'react';

export default class FindNumber extends React.Component {

    constructor(props) {
        super(props);
        this.randomNumber = this._generateNumber();
        this.number = 0;
        this.turn = 1;
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
        console.log("Perdu");
        this.randomNumber = this._generateNumber();
        this.turn = 0;
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
            this.randomNumber = this._generateNumber();
            this.turn = 0;
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
            </div>
        );
    }
}

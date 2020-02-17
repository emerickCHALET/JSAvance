import React from 'react';

export default class FindNumber extends React.Component {

    constructor(props) {
        super(props);
        this.number = 0;
        this.random = 0;
        this.turn = 0;
    }

    submit(event) {
        event.preventDefault();
        this.number = event.target[0].value;
        this.checkNumber(this.number);
        console.log(this.number);

    }
    
   randomNumber() {
        this.random = Math.floor(Math.random() * 100);
        console.log(this.random);
     }

    restart(event) { 
    }

    checkNumber(number) {
        if (number > this.random) {
            console.log('Plus petit')
            this.turn++;
            console.log(this.turn);
        }
        else if (number < this.random) {
            console.log('Plus grand')
            this.turn++;
            console.log(this.turn);
        }
        else {
            console.log('Gagné')
            this.turn++;
            console.log(this.turn);
        }
    } 


    render() {
        return (
        <div>
           {this.randomNumber()}
            <form onSubmit = {event => this.submit(event)} >
            <input type="text"></input>
            <button>Send</button>
            <button>Restart</button>
            </form>
        </div>
    );
}

}
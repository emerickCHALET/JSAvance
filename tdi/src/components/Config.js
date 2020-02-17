import React from 'react';
export default class Config extends React.Component {

    constructor() {
        super();
        this.name = '';
    }
    
    submit(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        this.name = event.target[0].value;
    }

    render() {
        return (
            <form onSubmit = {event => this.submit(event)}>
              <input type='text'></input>
              <button>Submit</button>
            </form>
          );
    }


}
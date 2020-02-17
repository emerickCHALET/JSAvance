import React from 'react';
export default class Config extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
    }
    
    submit(event) {
        // Event context from Child
        event.preventDefault();
        console.log(event.target[0].value);
        this.name = event.target[0].value;
    }

    render() {
        return (
            <div>
            <p>Nom : {this.props.name}</p>
            <form onSubmit = {event => this.submit(event)}>
              <input type='text'></input>
              <button>Submit</button>
            </form>
            </div>
          );
    }


}
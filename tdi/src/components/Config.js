import React from 'react';
export default class Config extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
    }
    
    submit(event) {
        event.preventDefault();
        this.name = event.target[0].value;
        console.log(this.name);
        this.props.name(this.name);
    }

    render() {
        return (
            <form onSubmit = {event => this.submit(event)}>
              <input type='text'/>
              <button>Submit</button>
            </form>
          );
    }
}
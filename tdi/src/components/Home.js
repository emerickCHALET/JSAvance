import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h2> Home </h2>
            <p> HELLO {this.props.name} </p>
            </div>
          );
    }
    
}

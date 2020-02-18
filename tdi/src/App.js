import React from 'react';
import Routing from './components/Routing';
import './App.css';
import { Provider } from 'react-redux'
import Store from './redux/store'


export default class App extends React.Component{

  render() {
    return(
      <Provider store = {Store}>
      <Routing />
      </Provider>
    );
  }
}



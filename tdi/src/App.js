import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import Store from './redux/store'

import Routing from './components/Routing';

export default class App extends React.Component{

  render() {
    return(
      <Provider store = {Store}>
      <Routing />
      </Provider>
    );
  }
}



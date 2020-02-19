import React from 'react';
import { Provider } from 'react-redux'
import Store from './Store/config'
import './App.css';

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

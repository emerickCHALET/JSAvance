import {createStore} from 'redux';
import reducer from './reducer';

let initialState = {
    games: [],
    user: ''
};

export default createStore(reducer, initialState);


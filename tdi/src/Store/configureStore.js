import { createStore } from 'redux';
import getUsers from './Reducers/getUsers'

export default createStore(getUsers);
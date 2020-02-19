// Store/Reducers/game.js

import {
    ADD_USER
} from './actions';


const initialState = {
    /**
     * Score datas [{Object}]
     *
     * @param      {String}  {name}
     * @param      {Number}  {number}
     * @param      {Number}  {turn}
     */
    users: ""
};

export default function Game(state = initialState, action) {
    console.log('reducer', action.type);

    let nextState;

    switch (action.type) {

        case ADD_USER:
            // Le User n'est pas dans la liste, on l'ajoute.
            nextState = {
                ...state,
                users: action.value
            };

            return nextState || state;

        default:
            return state;
    }
}
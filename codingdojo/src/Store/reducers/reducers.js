// Store/Reducers/game.js

import {
    ADD_USER,
    // ADD_SCORE,
    ADD_TIMER
} from './actions';


const initialState = {
    users: "",
    timers: false
};

export default function Game(state = initialState, action) {
    console.log('reducer', action.type);

    let nextState;

    switch (action.type) {
        case ADD_USER:
            // Le User n'est pas dans la liste, on l'ajoute.
            nextState = {
                ...state,
                users: action.name
            };
            return nextState || state;
        case ADD_TIMER:
            // Le User n'est pas dans la liste, on l'ajoute.
            nextState = {
                ...state,
                timers: action.timer
            };
            return nextState || state;
        // case ADD_SCORE:
        
        default:
            return state;
    }
}
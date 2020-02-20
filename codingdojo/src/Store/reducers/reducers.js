// Store/Reducers/game.js

import {
    ADD_USER,
    ADD_SCORE
} from './actions';


const initialState = {
    users: ""
};

export default function Game(state = initialState, action) {
    console.log('reducer', action.type);

    let nextState;

    switch (action.type) {
        case ADD_SCORE:

            let newState;
            newState =  {...state, scores: [...state.scores, action.score]};

            return newState;

        case ADD_USER:
            // Le User n'est pas dans la liste, on l'ajoute.
            nextState = {
                ...state,
                users: action.name
            };
            return nextState || state;
        
        default:
            return state;
    }
}
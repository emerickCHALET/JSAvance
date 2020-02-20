// Store/Reducers/game.js

import {
    ADD_USER,
    ADD_TIMER,
    ADD_SCORE, RESET_TIMER
} from './actions';


const initialState = {
    users: "",
    timers: false,
    scores: []
};

export default function Game(state = initialState, action) {
    console.log('reducer', action.type);

    let nextState;

    switch (action.type) {
        // Ajoute les scores dans le tableau
        case ADD_SCORE:
            let newState;

            newState =  {...state, scores: [...state.scores, action.score]};

            return newState || state;

        case ADD_USER:
            // Le User n'est pas dans la liste, on l'ajoute.
            nextState = {
                ...state,
                users: action.name
            };
            return nextState || state;

        case ADD_TIMER:
            // On définit l'état du timer au lancement
            nextState = {
                ...state,
                timers: action.timer
            };
            return nextState || state;

        case RESET_TIMER:
            // On remet par défaut l'état du timer à false lors du reset
            nextState = {
                ...state,
                timers: false
            };
            return nextState || state;

        default:
            return state;
    }
}

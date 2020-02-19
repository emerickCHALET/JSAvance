// Store/Reducers/game.js

import {
    ADD_SCORE,
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
    scores: [],
    users: ""
};

export default function Game(state = initialState, action) {
    console.log('reducer', action.type);

    let nextState;

    switch (action.type) {

        case ADD_SCORE:

            let newState;
            newState =  {...state, scores: [...state.scores, action.score]};

            newState.scores.sort((a,b) => {

                if(a.turn === -1) {
                    return 1;
                }

                else if(b.turn === -1){
                    return -1;
                }

                else if(a.turn < b.turn){
                    return -1;
                }

                else if(a.turn > b.turn){
                    return 1;
                }

                else{
                    return 0;
                }

            });

            if(newState.scores.length > 5){
                newState.scores.pop();
            }




            return newState;

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
import {
    ADD_SCORE,
    GET_USERS
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
            return {...state, scores: [...state.scores, action.score]};

        case GET_USERS:
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
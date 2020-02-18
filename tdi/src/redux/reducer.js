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

            nextState = {...state, scores: [...state.scores, action.score]}

            return nextState || state;

        case ADD_USER:
            nextState = {
                ...state,
                users: action.name
            };
            return nextState || state;

        default:
            return state;
    }
}
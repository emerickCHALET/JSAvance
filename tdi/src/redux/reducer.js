import {ADD_GAME} from ('../redux');

const initialState = {
    games: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_GAME: 
        return {
            games: [
                ...state.games,
                {
                    user: action.user,
                    status: action.status,
                    attempt: action.attempt
                }
            ]
        };

        default:
            return state;
    }
}

export default rootReducer;
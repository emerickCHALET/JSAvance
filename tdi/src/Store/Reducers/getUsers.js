// Store/Reducers/GetUsers.js

const initialState = { users: [] };

function getUsers(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'GET_USER':
            // Le User n'est pas dans la liste, on l'ajoute.
            nextState = {
                ...state,
                users: [...state.users, action.value]
            };
            return nextState || state;
        default:
            return state;
    }
}

export default getUsers;

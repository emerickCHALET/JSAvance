export const ADD_GAME = 'ADD_GAME';

export function addGame(user, status, attempt) {
    return (type: ADD_GAME, user: user, status: status, attempt: attempt);
}
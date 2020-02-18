/*
 * Action types
 */

export const ADD_SCORE = 'ADD_SCORE';
export const GET_USERS = 'GET_USERS';

/*
* Actions creators
*/

/**
 * Add game to store
 * @param {Object} gameState State of the game
 */
export function addScore(gameState) {
    return { type: ADD_SCORE, gameState };
}

/**
 * Get the user name
 * @param {String} name 
 */
export function getUsers(name) {
    return { type: GET_USERS, name };
}









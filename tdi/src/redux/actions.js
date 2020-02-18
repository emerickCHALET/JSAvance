/*
 * Action types
 */

export const ADD_SCORE = 'ADD_SCORE';
export const ADD_USER = 'ADD_USER';

/*
* Actions creators
*/

/**
 * Add game to store
 * @param {Object} score State of the game
 */
export function addScore(score) {
    return { type: ADD_SCORE, score };
}

/**
 * Get the user name
 * @param {String} name 
 */
export function addUser(name) {
    return { type: ADD_USER, name};
}









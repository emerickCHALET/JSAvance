/*
* Action types
*/

export const ADD_USER = 'ADD_USER'
export const ADD_SCORE = 'ADD_SCORE'

/**
 * Get the user name
 * @param {String} name 
 */
export function addUser(name) {
    return { type: ADD_USER, name};
}

export function addScore(score) {
    return { type: ADD_SCORE, score}
}


/*
* Action types
*/

export const ADD_USER = 'ADD_USER';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_TIMER = 'ADD_TIMER';

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

export function addTimer(timer) {
    return { type: ADD_TIMER, timer}
}


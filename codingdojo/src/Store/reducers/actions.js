/**
 Action types
 */

export const ADD_USER = 'ADD_USER';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_TIMER = 'ADD_TIMER';
export const RESET_TIMER = 'RESET_TIMER';

/**
 * Get the name
 * @param {String} name 
 */
export function addUser(name) {
    return { type: ADD_USER, name};
}

/**
 * Get the score 
 * @param {Object} score 
 */
export function addScore(score) {
    return { type: ADD_SCORE, score}
}
/**
 * Add the timer
 * @param {boolean} timer 
 */
export function addTimer(timer) {
    return { type: ADD_TIMER, timer}
}

/**
 * Reset the timer
 * @param {boolean} timer 
 */
export function resetTimer(timer) {
    return { type: RESET_TIMER, timer}
}



/*
 * action types
 */

export const ADD_SCORE = 'ADD_SCORE';
export const ADD_USER = 'ADD_USER';

/*
 * action creators
 */

/**
 * Add score to store
 *
 * @return     {Object}  Redux Store Object
 * @param score
 */

export function addScore(score) {
    return { type: ADD_SCORE, score };
}

export function addUser(value) {
    return { type: ADD_USER, value };
}
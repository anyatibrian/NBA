import { GET_ALL_GAMES } from '../actions/ActionTypes'

const initialState = {
    articles: []
}

/**
 * reducers for handling news 
 * @param {*} state 
 * @param {*} action 
 */
export const newReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...initialState,
                articles: action.payload
            }
            break
        default:
            return state
    }
}
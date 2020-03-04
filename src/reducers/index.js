import { combineReducers } from 'redux'
import { AuthReducer } from './authReducer'
import { newReducer } from './gamesReducer'

export const rootReducer = combineReducers({
    auth: AuthReducer,
    news: newReducer
})
import { SIGN_UP, SIGN_IN, AUTO_SIGN_IN } from '../actions/ActionTypes'
const initialState = {
    signUpUserInfo: {},
    signInUserInfo: {},
    autoSignInInfo: {}
}

/**
 * reducer for signing in and up users
 * @param {*} state 
 * @param {*} action 
 */
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                signUpUserInfo: action.payload
            }
            break
        case SIGN_IN:
            return {
                ...state,
                signInUserInfo: {
                    id: action.payload.localId,
                    token: action.payload.idToken,
                    refToken: action.payload.refreshToken
                }
            }
            break
        case AUTO_SIGN_IN:
            return {
                ...state,
                autoSignInInfo: {
                    id: action.payload.user_id,
                    token: action.payload.id_token,
                    refToken: action.payload.refresh_token
                }
            }
        default:
            return state
    }
}
import axios from 'axios'
import { API_KEY } from '../utils/configs'
import { SIGN_UP, SIGN_IN, IS_LOADING, AUTO_SIGN_IN } from './ActionTypes'

/**
 * signs up new user into the application
 * @param {*} data 
 */
export const SignUpUser = (data) => async dispatch => {
    try {
        const response = await axios({
            method: 'POST',
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
            data: {
                email: data.email,
                password: data.password,
                returnSecureToken: true
            },
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        })
        console.log('response data', response.data)
        dispatch({
            type: SIGN_UP,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

/**
 * signs in new user into the application
 * @param {*} data 
 */
export const SignInUser = (data) => async dispatch => {
    try {
        const response = await axios({
            method: 'POST',
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            data: {
                email: data.email,
                password: data.password,
                returnSecureToken: true
            },
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        })
        dispatch({
            type: SIGN_IN,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }

}

/**
 * enabling auto login for the signed up users
 * @param {*} refreshToken 
 */
export const autoSignInUser = (refreshToken) => async dispatch => {
    const response = await axios({
        method: 'POST',
        url: `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
        data: `grant_type=refresh_token&refresh_token=${refreshToken}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        responseType: 'json'
    })
    dispatch({
        type: AUTO_SIGN_IN,
        payload: response.data
    })
}
import { GET_ALL_GAMES } from './ActionTypes'
import { FIREBASE_URL } from '../utils/configs'
import axios from 'axios'

/**
 * fetching all the available nows for the database 
 */
export const getAllNews = () => async dispatch => {
    const response = await axios({
        method: 'GET',
        url: `${FIREBASE_URL}/news.json`,
        headers: {
            'Content-type': 'application/json'
        },
        responseType: 'json'
    })
    const newsData = []
    for (let keys in response.data) {
        newsData.push({
            ...response.data[keys],
            id: keys
        })
    }
    dispatch({
        type: GET_ALL_GAMES,
        payload: newsData
    })
}
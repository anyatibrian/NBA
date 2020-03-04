import AsyncStorage from '@react-native-community/async-storage'


export const setToken = async (values, cb) => {
    const expiration = new Date().getTime() + (3600 * 100)
    const response = await AsyncStorage.multiSet([
        ['@nba_app@id', values.id],
        ['@nba_app@token', values.token],
        ['@nba_app@refToken', values.refToken],
        ['@nba_app@expireToken', expiration.toString()]
    ])
    cb()
}

export const getToken = async (cb) => {
    const response = await AsyncStorage.multiGet([
        '@nba_app@id',
        '@nba_app@token',
        '@nba_app@refToken',
        '@nba_app@expireToken'
    ])
    cb(response)
}
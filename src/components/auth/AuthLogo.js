import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../assets/nba.png'

const AuthLogo = () => {
    return (
        <View style={style.container}>
            <Image source={Logo} style={style.image} resizeMode={'contain'} />
        </View>
    )
}

export default AuthLogo

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 150,
    }
})
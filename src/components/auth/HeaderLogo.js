import React from 'react'
import { View, Text, Image } from 'react-native'
import LogoImage from '../../assets/nba_login_logo.png'

const HeaderLogo = () => {
    return (
        <Image source={LogoImage} style={{ width: 70, height: 35 }} resizeMode="contain" />
    )
}

export default HeaderLogo

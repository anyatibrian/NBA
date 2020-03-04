import React from 'react'
import { View, Text } from 'react-native'

const ReusePage = (props) => {
    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    )
}

export default ReusePage

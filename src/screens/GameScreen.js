import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class GameScreen extends Component {
    render() {
        return (
            <View>
                <Text> This is the game screen </Text>
            </View>
        )
    }
}
export default connect()(GameScreen)

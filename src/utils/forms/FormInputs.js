import React from 'react'
import { TextInput, Picker, View, Text, StyleSheet } from 'react-native'

//creating reusable form Input elementu234
const Input = (props) => {
    let Temaplate = null
    switch (props.type) {
        case 'text-input':
            Temaplate = <TextInput  {...props} style={style.input} />
        default:
            return Temaplate
    }
}
export default Input

const style = StyleSheet.create({
    input: {
        borderBottomColor: '#ffff',
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30
    }
})
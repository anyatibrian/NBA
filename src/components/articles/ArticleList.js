import React from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import lebron from '../../assets/lebron-james-diet.jpg'

const ArticleList = ({ article }) => {
    return (
        <View style={style.cardContainer}>
            <View>
                <Image
                    style={{ height: 150, width: 380 }}

                    source={lebron}
                    resizeMode="cover"
                />
                <Text style={style.header}>{article.title}</Text>
                <Text>{article.content.slice(0, 100).replace('<p>', '')}</Text>
            </View>
        </View>
    )
}

export default ArticleList

const style = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowColor: '#dddddd',
        shadowRadius: 2,
        margin: 10,
        padding: 5,
        elevation: 1
    },
    header: {
        fontSize: 20,
        fontWeight: '900'
    }
})

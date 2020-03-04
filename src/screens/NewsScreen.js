import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getAllNews } from '../actions/NewsActions'
import ArticleList from '../components/articles/ArticleList'
class NewsScreen extends Component {
    componentDidMount = () => {
        const { getAllNews } = this.props
        getAllNews()
    }
    render() {
        const { articles, navigation: {
            navigate
        } } = this.props
        const news = articles.map(data => {
            return <TouchableOpacity key={data.id}
                onPress={() => { navigate('SingleNews') }}
            >
                <ArticleList article={data} />
            </TouchableOpacity>
        })
        return (
            <View>
                <ScrollView>
                    {news}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.news.articles
})
export default connect(mapStateToProps, { getAllNews })(NewsScreen)

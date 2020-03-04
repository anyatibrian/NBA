import React, { Component } from 'react'
import AuthLogo from '../components/auth/AuthLogo'
import AuthForms from '../components/auth/AuthForms'
import { connect } from 'react-redux'
import { autoSignInUser } from '../actions/AuthActions'
import { getToken, setToken } from '../utils/asyncstorage/storage.Actions'
import {
  Text,
  View,
  StyleSheet,
  YellowBox
} from 'react-native'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  goToNext = () => {
    const { navigate } = this.props.navigation
    navigate('News')
  }
  componentDidMount() {
    getToken((values) => {
      if (!values[0][1]) {
        console.log('is un able to auto sign in')
      } else {
        const { autoSignInUser, autoSignIn } = this.props
        autoSignInUser(values[2][1]).then(() => {
          setToken(autoSignIn)
          this.goToNext()
        })
      }
    })
  }
  render() {
    return (
      <View style={style.container}>
        <AuthLogo />
        <AuthForms goToNext={this.goToNext} />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  autoSignIn: state.auth.autoSignInInfo
})
export default connect(mapStateToProps, { autoSignInUser })(Home)

const style = StyleSheet.create({
  avator: {
    width: '100%',
    height: 400
  },
  container: {
    flex: 1,
    backgroundColor: '#17408b',
    paddingTop: 150
  },
  button: {
    margin: 30
  }
})

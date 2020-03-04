import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Input from '../../utils/forms/FormInputs'
import { SignUpUser, SignInUser, autoSignInUser } from '../../actions/AuthActions'
import ValidationRules from '../../utils/forms/validationRules'
import { setToken } from '../../utils/asyncstorage/storage.Actions'

class AuthForms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'Login',
            action: 'Login',
            actionMode: ' I want to Register ',
            hasError: false,
            forms: {
                email: {
                    value: "",
                    valid: true,
                    type: "text-input",
                    rules: {
                        isRequired: true,
                        isEmail: true
                    },
                },
                password: {
                    value: "",
                    valid: true,
                    type: "text-input",
                    rules: {
                        isRequired: true,
                        minLength: 6,
                    }
                },
                confirmPassword: {
                    value: "",
                    valid: true,
                    type: "text-input",
                    rules: {
                        confirmPass: "password"
                    }
                }

            }
        }
    }
    updateInput = (name, value) => {
        let formCopy = this.state.forms
        formCopy[name].value = value
        let rules = formCopy[name].rules
        //validate form fields 
        let valid = ValidationRules(value, rules, formCopy)
        formCopy[name].valid = valid
        this.setState({ forms: formCopy })
    }
    manageAccess = () => {
        const { signInInfo } = this.props
        if (!signInInfo.id) {
            this.setState({ hasError: true })
        } else {

            setToken(signInInfo, () => {
                console.log('going to the nextplace')
            })
        }
    }
    /**
     * function to change types based on the password
     */
    changeFormType = () => {
        const { type } = this.state
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'I want to Login' : 'I want to Register'
        })

    }

    /*
    handling login submit
    */
    handleSubmit = () => {
        const { SignUpUser, SignInUser } = this.props
        const { forms, type } = this.state
        let isFormValid = true
        let submitForm = {}
        for (let keys in forms) {
            if (type === 'Login') {

                if (keys !== 'confirmPassword') {
                    isFormValid = isFormValid && forms[keys].valid
                    submitForm[keys] = forms[keys].value
                }
            } else {
                isFormValid = isFormValid && forms[keys].valid
                submitForm[keys] = forms[keys].value
            }
        }

        if (isFormValid) {
            if (type === 'Login') {
                SignInUser(submitForm).then(() => {
                    this.manageAccess()
                })

            } else {
                SignUpUser(submitForm)
            }
        } else {
            this.setState({ hasError: true })
        }
    }
    render() {
        const { forms: { email, password, confirmPassword }, hasError, action, actionMode, type } = this.state
        const { goToNext, signInInfo } = this.props
        return (
            <View>
                <Input
                    placeholder="Enter Email"
                    autoCapitalize="none"
                    type={email.type}
                    value={email.value}
                    placeholderTextColor="#ffff"
                    keyboardType="email-address"
                    onChangeText={value => this.updateInput('email', value)}
                />
                {email.valid ? <Text style={style.warningText}></Text>
                    : <Text style={style.warningText}>password is invalid</Text>}
                <Input
                    placeholder="Enter Password"
                    autoCapitalize="none"
                    type={password.type}
                    value={password.value}
                    secureTextEntry={true}
                    placeholderTextColor="#ffff"
                    onChangeText={value => this.updateInput('password', value)}
                />
                {password.valid ? <Text style={style.warningText}></Text>
                    : <Text style={style.warningText}>your emails is invalid</Text>}
                {type === 'Register' ? <Input
                    placeholder="confirm Password"
                    autoCapitalize="none"
                    type={confirmPassword.type}
                    value={confirmPassword.value}
                    secureTextEntry={true}
                    placeholderTextColor="#ffff"
                    onChangeText={value => this.updateInput('confirmPassword', value)}
                /> : <Text></Text>}
                {confirmPassword.valid ? <Text style={style.warningText}></Text>
                    : <Text style={style.warningText}>password do not match</Text>}
                <View style={style.Button}>
                    <Button
                        title={action}
                        onPress={this.handleSubmit}
                    />
                </View>
                {
                    hasError ? <View style={style.errorContainer}>
                        <Text style={style.errorText}> oops there was an error </Text>
                    </View> : null
                }
                <View style={style.LoginText}>
                    <Text onPress={this.changeFormType} style={style.textOption}>{actionMode}</Text>
                    <Text onPress={goToNext} style={style.textOption}>I will do it later</Text>
                </View>
            </View >
        )
    }
}
const mapStateToProps = state => ({
    signUpInfo: state.auth.signUpUserInfo,
    signInInfo: state.auth.signInUserInfo
})
export default connect(mapStateToProps, { SignUpUser, SignInUser, autoSignInUser })(AuthForms)

const style = StyleSheet.create({
    errorContainer: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#f44336',
        padding: 20
    },
    errorText: {
        fontWeight: '900',
        fontSize: 15,
        color: 'white'
    },
    Button: {
        marginLeft: 30,
        marginRight: 30
    },
    textOption: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        color: '#ffff',
        fontWeight: 'bold'
    },
    LoginText: {
        alignItems: 'center'
    },
    warningText: {
        color: '#f44336',
        marginLeft: 30,
        marginRight: 30,
        fontWeight: 'bold'
    }
})

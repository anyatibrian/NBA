/**
 * form validation function that 
 * handles all the form inputs fields
 * @param {*} rules 
 * @param {*} value 
 * @param {*} formCopy 
 */

const ValidationRules = (value, rules, formCopy) => {
    let valid = true
    for (let rule in rules) {
        switch (rule) {
            case 'isRequred':
                valid = valid && validateisRequired(value)
                break
            case 'minLength':
                valid = valid && validateMinLength(value, rules[rule])
                break
            case 'isEmail':
                valid = valid && validateEmail(value)
                break
            case 'confirmPass':
                valid = valid && validateConfirmPass(value, formCopy.password.value)
                break
            default:
                valid = true
        }
    }
    return valid
}
/**
 * validate empty fields
 * @param {*} value 
 */
const validateisRequired = value => {
    if (value !== '') {
        return true
    }
    return false

}
/**
 * validating the emails fields
 * @param {*} email 
 */
const validateEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (expression.test(String(email).toLocaleLowerCase())) {
        return true
    } else {
        return false
    }
}

/**
 * validate the min length of the password field
 * @param {*} value 
 * @param {*} rule 
 */
const validateMinLength = (value, rule) => {
    if (value.length >= rule) {
        return true
    } else {
        return false
    }
}
/**
 * validating the confirm password field
 * @param {*} pass 
 * @param {*} confirmPass 
 */
const validateConfirmPass = (pass, confirmPass) => {
    if (pass === confirmPass) {
        return true
    } else {
        return false
    }
}
export default ValidationRules
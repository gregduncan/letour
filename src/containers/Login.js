import React, { Component } from "react"
import { View, Alert, AsyncStorage, Text } from "react-native"
import { Actions } from "react-native-router-flux"
import { connect } from "react-redux"

import LoginForm from "../components/forms/LoginForm"
import { login } from "../actions/user"

class Login extends Component {

    handleLogin(username, password) {
        this.props.dispatch(login(true))
    }

    render() {
        return (
            <LoginForm onPress={this.handleLogin.bind(this)} />
        )
    }
}

export default connect(store => ({
    user: store.user.user
}))(Login)
import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"

import SettingsForm from "../components/forms/SettingsForm"
import { logout } from "../actions/user"

class Settings extends Component {

    handleLogout() {
        this.props.dispatch(logout())
    }

    render() {
        return (
           <SettingsForm logout={this.handleLogout.bind(this)} />
        )
    }
}

export default connect(store => ({
    user: store.user.user
}))(Settings)
import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"

class Calendar extends Component {

    render() {
        return (
           <Text>Calendar</Text>
        )
    }
}

export default connect(store => ({
    user: store.user.user
}))(Calendar)
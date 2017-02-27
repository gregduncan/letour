import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"

class Stage extends Component {

    render() {
        return (
           <Text>Canvas</Text>
        )
    }
}

export default connect(store => ({
    stages: store.stages.stages,
    user: store.user.user
}))(Stage)
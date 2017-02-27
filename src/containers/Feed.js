import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"

class Feed extends Component {

    render() {
        return (
           <Text>Feed</Text>
        )
    }
}

export default connect(store => ({
    stages: store.stages.stages,
    user: store.user.user
}))(Feed)
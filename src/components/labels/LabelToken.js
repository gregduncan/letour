import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"

class LabelToken extends Component {
    render() {
        return (
            <View style={styles.labelView}>
                <Text style={styles.labelText}>{this.props.user.id}</Text>
            </View>
        )
    }
}

export default connect(store => ({
    user: store.user.user
}))(LabelToken)

const styles = StyleSheet.create({
    labelView: {
       height: 20,
       paddingHorizontal: 20,
    },
    labelText: {
        color: "#FFF",
        fontSize: 12,
    }
})
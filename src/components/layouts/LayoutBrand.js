import React, { Component } from "react"
import { StyleSheet, View, Image, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export default class LayoutBrand extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./bg.png")} style={styles.background}>
                    {this.props.children}
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width,
        height,
    }
})
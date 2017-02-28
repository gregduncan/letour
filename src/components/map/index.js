import React, { Component } from "react"
import { StyleSheet, View, Image, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

export default class Map extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./map.jpg")} style={styles.map} resizeMode="stretch" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: 350,
        width: width
    }
})
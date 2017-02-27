import React from "react"
import { Image, StyleSheet } from "react-native"

export const Logo = () => {
    return (
        <Image source={require("./logo.jpg")} style={styles.logo} resizeMode="contain" />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: null,
        height: null,
        flex: 1
    }
})
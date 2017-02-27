import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Actions } from "react-native-router-flux"
import changeCase from "change-case"
import Icon from "react-native-vector-icons/FontAwesome"

const { width, height } = Dimensions.get("window")

export default class Stage extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.widget} activeOpacity={.5} onPress={() => Actions.stage({ id: "Stage 1", title: "Stage 1"})}>
                <View style={styles.stage}>
                    <View style={styles.containerTop}>
                        <Text>Greg</Text>
                    </View>
                    <View style={styles.containerBottom}>
                       
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    widget: {
        marginBottom: 10,
        marginHorizontal: 10,
    },
    stage: {
        backgroundColor: '#fafafa',
        borderColor: '#cfcfcf',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    containerBottom: {
        borderColor: '#cfcfcf',
        borderTopWidth: 1,
        borderStyle: 'solid',
    },
    containerTop: {
        marginHorizontal: 10
    },
    textProd:{
        color:'#005387',
        marginTop:10,
        marginBottom:5,
        fontSize:11
    },
    textTitle:{
        color:'#888',
        marginBottom:5,
        fontSize:22
    },
    textDisplay:{
        color:'#333',
        fontSize:16
    },
    textLabel:{
        color:'#888',
        marginBottom:5,
        fontSize:11
    },
    icon:{
        marginTop:5
    }
})
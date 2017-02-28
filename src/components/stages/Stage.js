import React, { Component, PropTypes } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Actions } from "react-native-router-flux"
import changeCase from "change-case"
import Icon from "react-native-vector-icons/FontAwesome"

export default class Stage extends Component {

    render() {
        const { item } = this.props

        return (
            <TouchableOpacity style={styles.widget} activeOpacity={.5} onPress={() => Actions.stage({ id: item.stage, title: `Stage ${item.stage}` })}>
                <View style={styles.stage}>
                    <View style={styles.containerTop}>
                        <Text style={styles.textTop}>{item.date}</Text>
                        <Text style={styles.textTitle}>Stage {item.stage}</Text>
                        <Text style={styles.textBottom}>{item.start} <Icon name="caret-right" size={12} color="#262626" /> {item.finish}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

Stage.propTypes = {
    item: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    widget: {
        marginBottom: 0,
        marginHorizontal: 10,
    },
    stage: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        marginTop: 10,
        paddingBottom: 10
    },
    containerTop: {
        marginHorizontal: 10
    },
    textTop: {
        color: '#aaa',
        marginBottom: 5,
        fontSize: 11
    },
    textTitle: {
        marginBottom: 5,
        fontSize: 16
    },
    textBottom: {
        color: '#333',
        fontSize: 13
    }
})
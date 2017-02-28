import React, { Component, PropTypes } from "react"
import { View, Text, StyleSheet } from "react-native"
import changeCase from "change-case"
import Icon from "react-native-vector-icons/FontAwesome"

import Map from "../map"

export default class StageDetail extends Component {

    render() {
        const { item } = this.props

        return (
            <View>
                <Map />
                <View style={styles.detail}>
                    <Text style={styles.textTitle}>Stage {item.stage}</Text>
                    <Text style={styles.textLabel}>{item.start} <Icon name="caret-right" size={12} color="#262626" /> {item.finish}</Text>
                    <Text style={styles.textPrimary}>{item.distance}km</Text>
                    <Text style={styles.textDefault}>Christian Prudhomme's comment:</Text>
                    <Text style={styles.text}>{item.desciption}</Text>
                </View>
            </View>
        )
    }
}

StageDetail.propTypes = {
    item: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    detail: {
        marginHorizontal: 10,
        marginTop: 20,
        height: 400
    },
    textTitle: {
        marginBottom: 5,
        fontSize: 24
    },
    textLabel: {
        marginBottom: 5,
        fontSize: 16
    },
    textPrimary: {
        marginBottom: 5,
        fontSize: 16,
        color: '#fabb00'
    },
    textDefault: {
        marginBottom: 5,
        fontSize: 14,
        color: '#aaa'
    },
    text: {
        fontSize: 14
    },
})
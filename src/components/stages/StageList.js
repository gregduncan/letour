import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView, ListView } from "react-native"

import Stage from "./Stage"

export default class StageList extends Component {

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <View style={styles.list}>
                <ListView
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRows(this.props.items)}
                    renderRow={(rowData) => <Stage item={rowData} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop:20,
        marginBottom: 40,
        borderColor: '#cfcfcf',
        borderWidth: 1,
        borderStyle: 'solid',
    }
})
import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Actions } from "react-native-router-flux"
import Icon from "react-native-vector-icons/FontAwesome"

export default class SettingsForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>ACCOUNT</Text>
                    <View style={styles.list}>
                        <View style={styles.listItem}>
                            <TouchableOpacity activeOpacity={.5} onPress={this.props.logout}>
                                <Text style={styles.listItemText}><Icon name="sign-out" size={14} color="#262626" /> Log Out</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listItem}>
                            <TouchableOpacity activeOpacity={.5}>
                                <Text style={styles.listItemText}><Icon name="bicycle" size={14} color="#262626" /> Le Tour Website</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listItem}>
                            <TouchableOpacity activeOpacity={.5}>
                                <Text style={styles.listItemText}><Icon name="trash" size={14} color="#262626" /> Clear Cache</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.sectionHeading}>SUPPORT</Text>
                    <View style={styles.list}>
                        <View style={styles.listItem}>
                            <TouchableOpacity activeOpacity={.5}>
                                <Text style={styles.listItemText}><Icon name="question-circle" size={14} color="#262626" /> Help Centre</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listItem}>
                            <TouchableOpacity activeOpacity={.5}>
                                <Text style={styles.listItemText}><Icon name="bug" size={14} color="#262626" /> Report a Problem</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
    },
    section: {
        marginBottom:0,
        marginTop: 50
    },
    sectionHeading: {
        color: '#888',
        fontSize: 11,
        marginHorizontal: 10,
        marginTop: 50,
        marginBottom:5
    },
    list: {
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderTopWidth: 1,
        borderStyle: 'solid',
    },
    listItem: {
        borderColor: '#eee',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    }, 
    listItemText:{
        color:'#333',
        marginHorizontal: 10,
        marginVertical:10,
    }
})
import React, { Component } from "react"
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from "react-native"
import { Actions } from "react-native-router-flux"

import LayoutBrand from "../layouts/LayoutBrand"
import { Logo } from "../icons/Logo"

export default class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            loading: false
        }
        this.onPress = this.onPress.bind(this)
    }

    onPress() {
        this.setState({ loading: true })
        this.props.onPress(this.state.username, this.state.password)
    }

    render() {
        return (
            <LayoutBrand>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Logo />
                    </View>
                    <View style={styles.main}>
                        <View style={styles.formGroup}>
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor="#eee"
                                style={styles.input}
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                                underlineColorAndroid='transparent'
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <TextInput
                                placeholderTextColor="#eee"
                                placeholder="Password"
                                style={styles.input}
                                secureTextEntry
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                underlineColorAndroid='transparent'
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={styles.btnGroup}>
                            <TouchableOpacity activeOpacity={.5} onPress={this.onPress}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnTxt}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textAlt} onPress={Actions.password}>Forgot password?</Text>
                        </View>
                        <View style={styles.row}>
                            <ActivityIndicator animating={true} style={{ opacity : this.state.loading ? 1 : 0 }} size="large" />
                        </View>
                    </View>
                </View>
            </LayoutBrand>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: .6,
        backgroundColor: 'transparent',
        marginHorizontal: 50
    },
    main: {
        flex: .5,
        backgroundColor: 'transparent',
        marginHorizontal: 20,
    },
    formGroup: {
        backgroundColor: '#262626',
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'transparent',
        height: 45,
        marginLeft: 10,
        fontSize: 16,
        color: '#f9f9f9'
    },
    btnGroup: {
        backgroundColor: '#fabb00',
    },
    btn: {
        height: 45,
        alignItems: 'center',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 16,
        marginTop: 12
    },
    row: {
        marginTop: 10,
    },
    textAlt:{
        color:'#262626',
        fontSize:12,
    }
})
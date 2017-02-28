import React, { Component } from "react"
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from "react-native"
import { Actions } from "react-native-router-flux"

import LayoutBrand from "../layouts/LayoutBrand"
import { Logo } from "../icons/Logo"

export default class PasswordForm extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            loading: false,
            showResponse: false
        }
        this.onPress = this.onPress.bind(this)
    }

    onPress() {
        this.setState({ loading: true, showResponse: false })
        setTimeout(() => this.setState({ loading: false, showResponse: true, email: "" }), 2000)
    }

    _renderResponse() {
        if (this.state.showResponse) {
            return (
                <View style={styles.row}>
                    <Text style={styles.textResponse}>If account exists you will recieve an email with instructions on how to reset your password.</Text>
                </View>
            )
        } else {
            return null
        }
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
                                placeholder="Enter email"
                                placeholderTextColor="#eee"
                                style={styles.input}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={styles.btnGroup}>
                            <TouchableOpacity activeOpacity={.5} onPress={this.onPress}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnTxt}>Recover</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textAlt} onPress={Actions.login}>Back to Login...</Text>
                        </View>
                        {this._renderResponse()}
                        <View style={styles.row}>
                            <ActivityIndicator animating={true} style={{ opacity: this.state.loading ? 1 : 0 }} size="large" />
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
        marginBottom: 10
    },
    btnGroupAlt: {
        backgroundColor: '#006699',
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
    textAlt: {
        color: '#262626',
        fontSize: 12,
    },
    textResponse: {
        color: '#262626',
        fontSize: 13,
    }
})
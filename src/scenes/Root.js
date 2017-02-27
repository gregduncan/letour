import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Router, Scene, Actions, Switch } from "react-native-router-flux"
import { connect } from "react-redux"

import Login from "../containers/Login"
import Stages from "../containers/Stages"
import Stage from "../containers/Stage"
import Settings from "../containers/Settings"
import Password from "../containers/Password"
import Feed from "../containers/Feed"
import Calendar from "../containers/Calendar"
import { TabIcon } from "../components/icons/TabIcon"

export default class Root extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="switcher" unmountScenes component={connect(store => ({ user: store.user.user }))(Switch)} selector={props => props.user.auth ? "auth" : "unauth"} tabs={true}>
                        <Scene key="auth" tabs={true} tabBarStyle={styles.tabBarStyle}>
                            <Scene key="home" icon={TabIcon} title="HOME" >
                                <Scene key="stages" component={Stages} title="stages" hideNavBar />
                                <Scene key="stage" component={Stage} title="stage" hideNavBar={false} />
                            </Scene>
                            <Scene key="docs" icon={TabIcon} title="CALENDAR">
                                <Scene key="calendar" component={Calendar} title="Calendar" />
                            </Scene>
                            <Scene key="news" icon={TabIcon} title="FEED">
                                <Scene key="feed" component={Feed} title="Latest News" />
                            </Scene>
                            <Scene key="settings" icon={TabIcon} title="OPTIONS">
                                <Scene key="help" component={Settings} title="Options" />
                            </Scene>
                        </Scene>
                        <Scene key="unauth">
                            <Scene key="login" component={Login} hideNavBar hideTabBar />
                            <Scene key="password" component={Password} hideNavBar hideTabBar style={styles.container} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005387'
    },
    tabBarStyle: {
        borderColor: '#fabb00',
        backgroundColor: '#fabb00',
        height: 40,
        opacity: 1
    }
})
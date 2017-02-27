import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, Alert } from "react-native"
import { connect } from "react-redux"

import StageList from "../components/stages/StageList"
import { fetchStages } from "../actions/stages"

class Stages extends Component {

    componentDidMount() {
        this.props.dispatch(fetchStages())
    }

    render() {
        return (
           <StageList items={this.props.stages} />
        )
    }
}

export default connect(store => ({
    stages: store.stages.stages,
    user: store.user.user
}))(Stages);
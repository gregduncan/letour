import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"

import StageDetail from "../components/stages/StageDetail"

class Stage extends Component {

    render() {
        
        const item = this.props.stages.filter((item) => item.stage === this.props.id)[0]

        return (
           <StageDetail item={item} />
        )
    }
}

export default connect(store => ({
    stages: store.stages.stages,
    user: store.user.user
}))(Stage)
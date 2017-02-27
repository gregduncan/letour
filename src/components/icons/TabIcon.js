import React from "react"
import { Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import ChangeCase from "change-case"

export const TabIcon = ({ selected, title }) => {

    let name = ""
    switch (ChangeCase.lowerCase(title)) {
        case "home":
            name = "home"
            break
        case "options":
            name = "cog"
            break
        case "feed":
            name = "newspaper-o"
            break
        case "calendar":
            name = "calendar"
            break
    }

    return (
        <Icon name={name} size={20} color={selected ? '#fff' : '#262626' } />
    )
}



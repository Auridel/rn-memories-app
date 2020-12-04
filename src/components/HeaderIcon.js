import React from "react";
import {Platform} from "react-native";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../theme";

const HeaderIcon = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={24} color={Platform.OS === "android"? "#fff" : THEME.COLOR_MAIN}/>
}

export default HeaderIcon;
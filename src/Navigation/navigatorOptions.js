import {Platform} from "react-native";
import {THEME} from "../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";
import React from "react";

export const navigatorOptions = {
    headerTitleAlign: "center",
    headerStyle: {
        backgroundColor: Platform.OS === "android"? THEME.COLOR_MAIN : "#fff"
    },
    headerTintColor: Platform.OS === "android"? "#fff" : THEME.COLOR_MAIN,

}
export const menuButton = (navigation) => ({
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title="open menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
})
export const cameraButton = {
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title="open menu" iconName="ios-camera" onPress={() => console.log("camera")}/>
    </HeaderButtons>
}
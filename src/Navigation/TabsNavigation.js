import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";
import PostNavigation from "./PostNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {THEME} from "../theme";

const Tabs = Platform.OS === "android"?
    createMaterialBottomTabNavigator() : createBottomTabNavigator();

const androidOpt = {
    initialRouteName: "Home",
    activeColor: "#fff",
    inactiveColor: THEME.COLOR_TAB_INACTIVE,
    shifting: true,
    barStyle: { "backgroundColor": THEME.COLOR_MAIN},
}

const iosOpt = {
    tabBarOptions: {
        activeTintColor: THEME.COLOR_MAIN,
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 16
        }
    }
}


const TabsNavigation = () => {
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color}) => {
                    let iconName;

                    if(route.name === "All"){
                        iconName = focused? "ios-list-box" : "ios-list";
                    }else if(route.name === "Favorite"){
                        iconName = focused? "ios-star" : "ios-star-outline";
                    }
                    return <Ionicons name={iconName} size={25} color={color}/>
                }
            })}
            {...Platform.OS === "android"? androidOpt : iosOpt}
        >
            <Tabs.Screen name="All" component={PostNavigation}/>
            <Tabs.Screen name="Favorite" component={FavoriteNavigation}/>
        </Tabs.Navigator>
    )
}

export default TabsNavigation;
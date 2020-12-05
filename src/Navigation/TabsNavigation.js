import React, {useEffect} from "react";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {THEME} from "../theme";
import MainScreen from "../screens/MainScreen";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

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



const TabsNavigation = ({navigation, route}) => {

    useEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
        navigation.setOptions({
            headerTitle: routeName === "Favorite"? "Favorite" : "Home"
        })
    }, [route])

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
            <Tabs.Screen name="All" component={MainScreen} initialParams={{main: "main"}}/>
            <Tabs.Screen name="Favorite" component={MainScreen}/>
        </Tabs.Navigator>
    )
}

export default TabsNavigation;
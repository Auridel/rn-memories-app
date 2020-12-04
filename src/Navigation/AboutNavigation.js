import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {navigatorOptions, cameraButton, menuButton} from "./navigatorOptions";
import AboutScreen from "../screens/AboutScreen";

const AboutNavigator = createStackNavigator();

const AboutNavigation = ({navigation}) => {
    return (
        <AboutNavigator.Navigator screenOptions={navigatorOptions}>
            <AboutNavigator.Screen name="About" component={AboutScreen} options={{
                title: "About", ...menuButton(navigation), ...cameraButton
            }}/>
        </AboutNavigator.Navigator>)
}

export default AboutNavigation;
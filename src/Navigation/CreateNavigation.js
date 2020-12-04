import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CreateScreen from "../screens/CreateScreen";
import {navigatorOptions, menuButton} from "./navigatorOptions";

const CreateNavigator = createStackNavigator();

const CreateNavigation = ({navigation}) => {
    return (
        <CreateNavigator.Navigator screenOptions={navigatorOptions}>
            <CreateNavigator.Screen name="Create" component={CreateScreen} options={{
                title: "Create new memories", ...menuButton(navigation)}}/>
        </CreateNavigator.Navigator>)
}

export default CreateNavigation;
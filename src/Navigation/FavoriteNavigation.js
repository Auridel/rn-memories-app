import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import {navigatorOptions, cameraButton, menuButton} from "./navigatorOptions";
import MainScreen from "../screens/MainScreen";

const FavoriteNavigator = createStackNavigator();

const FavoriteNavigation = ({navigation}) => {
    return (
        <FavoriteNavigator.Navigator screenOptions={navigatorOptions}>
            <FavoriteNavigator.Screen name="Favorite" component={MainScreen} options={{
                title: "Favorite", ...menuButton(navigation), ...cameraButton(navigation)
            }}/>
            <FavoriteNavigator.Screen name="Post" component={PostScreen} options={({route}) => ({
                title: route.params.name, ...cameraButton(navigation)
            })}/>
        </FavoriteNavigator.Navigator>)
}

export default FavoriteNavigation;
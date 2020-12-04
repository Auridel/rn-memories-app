import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import PostScreen from "../screens/PostScreen";
import {navigatorOptions, cameraButton, menuButton} from "./navigatorOptions";

const FavoriteNavigator = createStackNavigator();

const FavoriteNavigation = ({navigation}) => {
    return (
        <FavoriteNavigator.Navigator screenOptions={navigatorOptions}>
            <FavoriteNavigator.Screen name="Favorite" component={FavoritesScreen} options={{
                title: "Favorite", ...menuButton(navigation), ...cameraButton
            }}/>
            <FavoriteNavigator.Screen name="Post" component={PostScreen} options={({route}) => ({
                title: route.params.name, ...cameraButton
            })}/>
        </FavoriteNavigator.Navigator>)
}

export default FavoriteNavigation;
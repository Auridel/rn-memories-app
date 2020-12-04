import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import {navigatorOptions, cameraButton, menuButton} from "./navigatorOptions";

const PostsNavigator = createStackNavigator();

const PostNavigation = ({navigation}) => {
    return (
        <PostsNavigator.Navigator screenOptions={navigatorOptions}>
            <PostsNavigator.Screen name="Main" component={MainScreen} options={{
                title: "Home", ...menuButton(navigation), ...cameraButton
            }}/>
            <PostsNavigator.Screen name="Post" component={PostScreen} options={({route}) => ({
                title: route.params.name, ...menuButton(navigation), ...cameraButton
            })}/>
        </PostsNavigator.Navigator>)
}

export default PostNavigation;
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import {navigatorOptions, cameraButton, menuButton} from "./navigatorOptions";
import TabsNavigation from "./TabsNavigation";

const PostsNavigator = createStackNavigator();

const PostNavigation = ({navigation}) => {
    return (
        <PostsNavigator.Navigator screenOptions={navigatorOptions}>
            <PostsNavigator.Screen name="Main" component={TabsNavigation} options={{
                title: "Home", ...menuButton(navigation), ...cameraButton(navigation)
            }}/>
            <PostsNavigator.Screen name="Post" component={PostScreen} options={({route}) => ({
                title: route.params.name, ...cameraButton(navigation)
            })}/>
        </PostsNavigator.Navigator>)
}

export default PostNavigation;
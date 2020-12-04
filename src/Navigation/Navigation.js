import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation";



const Navigator = () => {

    return (
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    )
}

export default Navigator;
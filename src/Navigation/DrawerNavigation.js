import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import TabsNavigation from "./TabsNavigation";
import CreateNavigation from "./CreateNavigation";
import AboutNavigation from "./AboutNavigation";

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Tabs" component={TabsNavigation}
                                    options={{
                                        title: "Home",
                                        drawerIcon: info => <Ionicons name="md-home" size={24} color={info.color}/>
                                    }}/>
            <DrawerNavigator.Screen name="Create" component={CreateNavigation}
                                    options={{
                                        title: "Create new",
                                        drawerIcon: info => <Ionicons name="ios-add" size={24} color={info.color}/>
                                    }}/>
            <DrawerNavigator.Screen name="About" component={AboutNavigation}
                                    options={{
                                        title: "About",
                                        drawerIcon: info => <Ionicons name="ios-information-circle-outline" size={24} color={info.color}/>
                                    }}/>
        </DrawerNavigator.Navigator>
    )
}

export default DrawerNavigation;
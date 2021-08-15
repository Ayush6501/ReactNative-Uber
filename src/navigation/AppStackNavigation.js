import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screen/Homescreen";
import MapScreen from "../screen/MapScreen";

const AppStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown: false, drawerActiveBackgroundColor: "white", drawerActiveTintColor: "black",
                }}
            />
            <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                    headerShown: false, drawerActiveBackgroundColor: "white", drawerActiveTintColor: "black",
                }}
            />
        </Stack.Navigator>
    );
}

export default AppStackNavigator;

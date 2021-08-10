import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Homescreen";
import MapScreen from "../screen/MapScreen";

const MainStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;

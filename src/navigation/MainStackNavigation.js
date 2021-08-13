import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screen/Homescreen";
import MapScreen from "../screen/MapScreen";
import LoginScreen from "../screen/LoginScreen";
import {useSelector} from "react-redux";
import {selectUserToken} from "../feature/userSlice";

const MainStackNavigator = () => {
    const Stack = createStackNavigator();
    const token = useSelector(selectUserToken);

    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            {token === null ? <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            /> : (
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />)}
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

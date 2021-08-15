import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen";
import DrawerNavigation from "./DrawerNavigation";
import {selectUserToken} from "../feature/userSlice";
import {useSelector} from "react-redux";

const MainStackNavigator = () => {
    const Stack = createStackNavigator();
    // const token = useSelector(selectUserToken);

    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Main'
                component={DrawerNavigation}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;

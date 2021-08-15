import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from "../components/Map";
import { createStackNavigator} from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import DriverDetailCard from "../components/DriverDetailCard";
import EndRideScreen from "./EndRideScreen";

const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                style={tw`absolute top-16 bg-gray-100 left-8 z-50 p-3 rounded-full shadow-lg`}>
             <Icon  name='menu' />
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="RideOptionCard"
                        component={RideOptionCard}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="DriverDetailCard"
                        component={DriverDetailCard}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="EndRideScreen"
                        component={EndRideScreen}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </View>
        </View>
    );
};
export default MapScreen;

import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./src/store/store";
import HomeScreen from "./src/screen/Homescreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import MapScreen from "./src/screen/MapScreen";
import {KeyboardAvoidingView} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

export default function App() {
  const stack = createStackNavigator();

    return (
      <Provider store={store}>
        <NavigationContainer>
            <SafeAreaProvider>
                <KeyboardAvoidingView
                    behavior={Platform.OS ==="ios" ? "padding" : "height"}
                    style={{flex: 1}}
                    keyboardVerticalOffset={Platform.OS ==="ios" ? -64 : 0}>
                    <DrawerNavigation />
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
};

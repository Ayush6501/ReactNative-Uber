import React from 'react';
import {Platform} from 'react-native';
import {Provider} from "react-redux";
import store from "./src/store/store";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import {KeyboardAvoidingView} from "react-native";
import MainStackNavigation from "./src/navigation/MainStackNavigation";

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
                    <MainStackNavigation />
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
};

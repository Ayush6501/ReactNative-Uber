import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import store from "./src/store/store";
import HomeScreen from "./src/screen/Homescreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import MapScreen from "./src/screen/MapScreen";

export default function App() {
  const stack = createStackNavigator();

  return (
      <Provider store={store}>
        <NavigationContainer>
            <SafeAreaProvider>
                <stack.Navigator>
                    <stack.Screen
                        name='HomeScreen'
                        component={HomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <stack.Screen
                        name='MapScreen'
                        component={MapScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
};

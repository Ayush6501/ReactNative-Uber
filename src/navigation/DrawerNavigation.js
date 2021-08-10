import React from "react";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer"
import MainStackNavigation from "./MainStackNavigation";
import EatsScreen from "../screen/EatsScreen";
import tw from "tailwind-react-native-classnames";
import {Dimensions, Text, View} from "react-native";
import NavOptions from "../components/NavOptions";
import {Icon} from "react-native-elements";

const Drawer = createDrawerNavigator();
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ height: windowHeight}}>
                <View style={{height: "30%", backgroundColor: "black",display: "flex", justifyContent: "flex-start"}}>
                    {/*<DrawerItem style={{*/}
                    {/*    height: 100,*/}
                    {/*    backgroundColor: "black",*/}
                    {/*    color: "white",*/}
                    {/*    margin: 0,*/}
                    {/*    padding: 0,*/}
                    {/*}} label={() => (<Text style={{color: "white", zIndex: 2}}>Help</Text>)} onPress={() => alert('Link to help')} />*/}
                    <View style={{
                        height: 100, flexDirection: "row", width: 220, justifyContent: "space-between", alignItems: "center",
                        marginLeft: 20
                    }}>
                        <Icon name="person-circle-outline" type="ionicon" color="white" size={70}/>
                        <View>
                            <Text style={tw`text-white text-xl`}>Ayush Majumdar</Text>
                            <Text style={{color: "gray"}}>4.78 Stars</Text>
                        </View>
                    </View>
                    <View style={[tw`bg-gray-200`, {height: 0.5}]} />
                    <View
                        style={{ height: 50, flexDirection: "row", width: 240, justifyContent: "space-between",
                        alignItems: "center", marginLeft: 25}}>
                        <View>
                            <Text style={tw`text-white text-lg`}>Messages</Text>
                        </View>
                        <Icon name="chevron-forward-outline" type="ionicon" color="white" size={30}/>
                    </View>
                    <View style={[tw`bg-gray-200`, {height: 0.5}]} />
                    <Text style={tw`text-gray-400 text-sm mt-4 ml-6`}>Do more with your account</Text>
                    <Text style={tw`text-white text-sm mt-4 ml-6`}>Make Money Driving</Text>
                </View>

                <View style={{height: "70%", backgroundColor: "white",display: "flex", justifyContent: "flex-start"}}>
                    <View>
                        <Text style={tw`text-2xl m-4 mb-2`}>Your Account</Text>
                        <DrawerItemList {...props} style={tw`text-black text-xl`}/>
                        <Text style={tw`text-gray-500 text-sm mt-4 ml-5`}>Help</Text>
                        <Text style={tw`text-gray-500 text-sm mt-8 ml-5`}>Wallet</Text>
                        <Text style={tw`text-gray-500 text-sm mt-8 ml-5`}>Settings</Text>

                    </View>
                    <View style={{position: "absolute", bottom: 5}}>
                        <View style={{ flexDirection: "row", width: 240, justifyContent: "space-between",
                            alignItems: "center", marginLeft: 25}}>
                            <Text>Made By Ayush Majumdar</Text>
                            <Text>v1.1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            panOpenMask={0.80}
            captureGestures="open"
            screenOptions={{
                drawerType: "slide",
                swipeEdgeWidth: 150,
                drawerStyle: {
                    backgroundColor: '#000000',
                },
            }}
            initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={MainStackNavigation}
                options={{
                    headerShown: false, drawerActiveBackgroundColor: "white", drawerActiveTintColor: "black",
                }}/>
            <Drawer.Screen name="Eats" component={EatsScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

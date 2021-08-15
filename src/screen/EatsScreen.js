import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, SafeAreaView} from "react-native";
import {Video} from "expo-av";
import tw from "tailwind-react-native-classnames";
import {Icon, Button} from "react-native-elements";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const EatsScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const interval = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(interval);
    }, []);

    return (
        <View style={styles.center}>
            {isLoading && <Video
                    shouldPlay
                    resizeMode="cover"
                    autoPlay={true}
                    isLooping={true}
                    source={require('../../assets/images/ubereats.mp4')}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            }
            {!isLoading && (
                <SafeAreaView style={tw`h-full w-full p-5`}>
                    <View style={{
                        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                    }}>
                        <Image
                            source={require('../../assets/images/uber-eats-logo.png')}
                            style={{
                                width: 150,
                                height: 150,
                                resizeMode: 'contain',
                                marginLeft: 10
                            }}
                        />
                        <Icon
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            name="menu-outline"
                            type="ionicon"
                            color="black"
                            size={45}
                        />
                    </View>
                    <View style={tw`flex justify-center items-center`}>
                        <View style={tw`flex-row justify-evenly items-center`}>
                            <Image
                                style={{height: 150,  width: 150}}
                                source={require('../../assets/images/eats1.png')} />
                            <Image
                                style={{height: 150, width: 150, marginLeft: 25}}
                                source={require('../../assets/images/eats2.png')} />
                        </View>
                        <View style={tw`flex-row justify-evenly items-center mt-6`}>
                            <Image
                                style={{height: 150,  width: 150}}
                                source={require('../../assets/images/eats3.png')} />
                            <Image
                                style={{height: 150, width: 150, marginLeft: 25}}
                                source={require('../../assets/images/eats4.png')} />
                        </View>
                        <Text style={tw`text-base m-3 text-center font-bold`}>
                            A vibrant visual system celebrating food moments inspired by the
                            emotive and electric world of food. It captures an authentic and
                            diverse art direction of full mouths, drizzled sauce, orders en
                            route, and the magic that connects those we serve.
                        </Text>
                        <Text style={tw`text-3xl font-bold text-green-900 mb-5`}>Coming To India, Soon.</Text>
                        <Button
                            buttonStyle={styles.button}
                            icon={
                                <Icon
                                    styles={tw`mr-4`}
                                    name="home-outline"
                                    size={18}
                                    color="white"
                                    type='ionicon'
                                />
                            }
                            title="  Home"
                            onPress={() => navigation.goBack()}
                         />
                    </View>
                </SafeAreaView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#90EE90"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'contain'
    },
    button: {
        width: 120,
        backgroundColor: '#142328',
        borderRadius: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,

    }
});

export default EatsScreen;

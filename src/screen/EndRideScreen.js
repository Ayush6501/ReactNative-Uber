import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const EndRideScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1 text-center`}>
            <View style={tw`flex-1 justify-start items-center m-10 text-center`}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{
                        width: 150,
                        height: 150,
                        resizeMode: 'contain',
                    }}
                />
                <Text style={tw`text-3xl font-bold text-center mb-3`}>Thank you for choosing Uber</Text>
                <Text style={tw`text-base text-gray-500 text-center`}>Amount has been debited from your account.</Text>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name='home-outline' type="ionicon" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Eats')}
                    style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type="ionicon" color="black" size={16} />
                    <Text style={tw`text-black text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default EndRideScreen;

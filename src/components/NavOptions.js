import {
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {selectOrigin} from "../feature/navSlice";
import {useSelector} from "react-redux";

const data = [
    {
        id: 'ride',
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: 'food',
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View>
                <FlatList
                    data={data}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                            onPress={() => navigation.navigate(item.screen)}
                            disabled={!origin}
                        >
                            <View style={tw`${!origin && "opacity-20"}`}>
                                <Image
                                    style={{ width: 120, height: 120, resizeMode: 'contain'}}
                                    source={{ uri: item.image}}
                                />
                                <Text style={tw`mt-2 text-lg font-bold `}>{item.title}</Text>
                                <Icon
                                    style={tw`p-2 bg-black rounded-full w-10 mt-4`} n
                                    name='arrowright'
                                    color='white'
                                    type="antdesign"
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default NavOptions;

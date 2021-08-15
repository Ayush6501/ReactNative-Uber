import tw from "tailwind-react-native-classnames";
import {SafeAreaView, View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {Bars} from 'react-native-loader';
import {useSelector} from "react-redux";
import {selectOrigin} from "../feature/navSlice";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const DriverDetailCard = ({route}) => {
    const { selected } = route.params;
    const navigation = useNavigation();

    const destination = useSelector(selectOrigin);
    const location = destination.description.split(',');

    const [isLoading, setIsLoading] = useState(true);
    const [driverMsg, setDriverMsg] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLoading(false);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isLoading) {
            return
        }
        const interval = setInterval(() => {
            navigation.navigate("EndRideScreen")
        }, 3500);
        return () => clearInterval(interval);
    }, [isLoading])

    const textChangeHandler = (e) => {
        setDriverMsg(e);
    }

    const textSendHandler = () => {
        setDriverMsg(null);
    }

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            {isLoading && <View style={tw`flex-1 justify-center items-center`}>
                <Bars size={30} color="#000" />
                <Text style={tw`text-black text-xl mt-5`}>Looking for Drivers...</Text>
            </View>}
            {!isLoading && (
                <View style={tw`flex-1 justify-center items-center`}>
                    <View style={tw`flex-1 justify-start items-center w-full`}>
                        <View style={tw`flex-row text-left justify-between items-center w-full p-3`}>
                            <Text style={tw`text-xl font-semibold`}>Meet at {location[0]}</Text>
                            <View style={{backgroundColor: "#2a9df4", height: 50, width: 50, flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
                                <Text style={tw`text-white font-bold text-lg`}>2</Text>
                                <Text style={tw`text-white`}>mins</Text>
                            </View>
                        </View>
                        <View style={{height: 1, flex: 0, justifyContent: "flex-start", backgroundColor: 'gray', width: "100%"}} />
                        <View style={tw`h-3/5 flex-col text-left justify-between items-center w-full px-3`}>
                            <View style={tw`flex-1 justify-start items-center w-full`}>
                                <View style={tw`flex-row text-left justify-between items-center w-full`}>
                                    <Image
                                        style={{
                                            width: 150,
                                            height: 150,
                                            resizeMode: 'contain',
                                        }}
                                        source={{ uri: selected.image}}
                                    />
                                    <View>
                                        <View style={{
                                            backgroundColor: "#9cbbd2", height: 40, width: 120, flexDirection: "row",
                                            justifyContent: "space-evenly", alignItems:"center", borderRadius: 100,
                                        }}>
                                            <Icon name="keypad-outline" type="ionicon" color="#203849" />
                                            <Text style={{color: "#203849", fontWeight: "bold", fontSize: 20 }}>2789</Text>
                                        </View>
                                        <Text style={tw`text-xl text-right mr-3 font-bold`}>4A3 064</Text>
                                        <Text style={tw`text-base text-right mr-3`}>{selected.title}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 0, justifyContent: "center", alignItems: "center", width: "100%"}}>
                                    <Text style={tw`text-lg`}>Driver ● 1543 trips</Text>
                                </View>
                                <View style={{flex: 0, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <TextInput
                                        value={driverMsg}
                                        type="text"
                                        onChangeText={(text) => textChangeHandler(text)}
                                        style={{
                                            height: 40,
                                            width: 200,
                                            margin: 6,
                                            borderWidth: 1,
                                            padding: 10,
                                            backgroundColor: "gray",
                                            fontSize: 20,
                                            borderRadius: 50,
                                            color: "black"
                                        }}
                                        placeholder="Message Driver"/>
                                    <TouchableOpacity onPress={textSendHandler}>
                                        <Icon
                                            style={{backgroundColor: "gray", padding: 8, borderRadius: 100, margin: 5}}
                                            name='send-outline' type='ionicon' color='black' size={30}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon
                                            style={{backgroundColor: "gray", padding: 8, borderRadius: 100, margin: 5}}
                                            name='call-outline' type='ionicon' color='black' size={30}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{height: 1, flex: 0, justifyContent: "flex-start", backgroundColor: 'gray', width: "100%"}} />
                        <View style={tw`flex justify-center items-center w-full`}>
                            <View style={tw`flex-row items-center justify-between text-left max-w-xl`}>
                                <View>
                                    <Text style={tw`text-lg font-bold`}>Your Driver Stated they're wearing</Text>
                                    <Text style={tw`text-lg font-bold leading-5`}>a face cover.</Text>
                                    <Text style={tw`text-lg font-bold text-blue-500`}>Learn More</Text>
                                </View>
                                <Image
                                    style={{height: 75, width: 75, marginLeft: 25, marginTop: 5}}
                                    source={require('../../assets/images/mask.jpg')} />
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
}

export default DriverDetailCard;

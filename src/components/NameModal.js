import Modal from 'react-native-modal';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {setUserLoginDetails, setUserName} from "../feature/userSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

const NameModal = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const nameChangeHandler = (text) => {
        setName(text);
    }

    const submitHandler = () => {
        if (name.trim().length === 0) {
            return
        }
        dispatch(
            setUserName({
                name: name
            })
        );
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={tw`m-0 p-0`}>
            <Modal isVisible={true}>
                <View style={{flex: 1, margin: 0, padding: 0}}>
                    <View style={styles.nameModal}>
                        <Text style={tw`flex justify-center items-start text-black text-3xl font-bold mt-4`}>Welcome To Uber</Text>
                        <Text style={tw`text-black text-lg font-semibold mt-1`}>Enter your username:- </Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            placeholder="Username"
                            onChangeText={(text) => nameChangeHandler(text)}
                        />
                        <View style={tw`flex-row justify-end items-end w-full mr-10`}>
                            <TouchableOpacity
                                onPress={submitHandler}
                                disabled={name.trim().length === 0}>
                                <Icon
                                    style={tw`justify-end items-end`}
                                    name="arrow-forward-outline"
                                    type="ionicon"
                                    size={60}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    nameModal: {
        position: "absolute",
        bottom: 200,
        width: "100%",
        height: 210,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    input: {
        height: 50,
        width: 300,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#d3d3d3",
        fontSize: 20,
        borderRadius: 5,
    },
})

export default NameModal;

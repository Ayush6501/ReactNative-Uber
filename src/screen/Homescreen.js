import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import {useDispatch, useSelector} from "react-redux";
import {
    setDestination,
    setOrigin,
} from "../feature/navSlice";

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{ uri:'https://links.papareact.com/gzs'}}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                />

                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18
                        },
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    placeholder='Where From?'
                    nearbyPlacesAPI="GooglePlacesSearch"
                    onFail={error => console.error(error)}
                    debounce={400}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKey={"search"}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});

export default HomeScreen;

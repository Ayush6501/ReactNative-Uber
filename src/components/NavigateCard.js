import React from "react";
import {SafeAreaView, Text, StyleSheet, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {setDestination, setOrigin} from "../feature/navSlice";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch} from "react-redux";
import {selectDestination} from "../feature/navSlice";
import {useNavigation} from "@react-navigation/native";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Good Morning, Ayush</Text>
          <View style={tw`border-t border-gray-200 flex-shrink`}>
              <GooglePlacesAutocomplete
                  styles={toInputBoxStyles}
                  enablePoweredByContainer={false}
                  minLength={2}
                  placeholder='Where To?'
                  nearbyPlacesAPI="GooglePlacesSearch"
                  debounce={400}
                  query={{
                      key: GOOGLE_MAPS_APIKEY,
                      language: "en"
                  }}
                  onPress={(data, details = null) => {
                      dispatch(setDestination({
                          location: details.geometry.location,
                          description: data.description,
                      }))

                      navigation.navigate('RideOptionCard');
                  }}
                  fetchDetails={true}
                  returnKeyType={"search"}
              />
          </View>
      </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: "white",
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 0,
        fontSize: 18,
        backgroundColor: "#DDDDDF",
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})

export default NavigateCard;

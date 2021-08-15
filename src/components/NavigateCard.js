import React from "react";
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {setDestination, setOrigin} from "../feature/navSlice";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch, useSelector} from "react-redux";
import {selectDestination} from "../feature/navSlice";
import {useNavigation} from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import {Icon} from "react-native-elements";
import {selectUserName} from "../feature/userSlice";

const NavigateCard = () => {
    const name = useSelector(selectUserName);

    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Good Morning, {name ? name : "User"}</Text>
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
              <NavFavourites />
          </View>



          <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
              <TouchableOpacity
                  onPress={() => navigation.navigate('RideOptionCard')}
                  style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                 <Icon name='car' type="font-awesome" color="white" size={16} />
                  <Text style={tw`text-white text-center`}>Rides</Text>
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

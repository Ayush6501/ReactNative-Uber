import {SafeAreaView, Text, TouchableOpacity, FlatList, View, Image} from "react-native";
import React, {useEffect, useState} from "react";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectTravelTimeInfo} from "../feature/navSlice";
import 'intl';
import "intl/locale-data/jsonp/en";

const data = [
    {
        id: "Uber-Scooter",
        title: "E-Scooter",
        multiplier: 0.6,
        timeMultiplier: 0.9,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_633,h_422/v1570191252/assets/7e/dacd44-dae2-4b53-8cbd-575e6d661ad6/original/generic-scooter.png",
    },
    {
        id: "Uber-Taxi",
        title: "Uber Taxi",
        multiplier: 0.9,
        timeMultiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1569012661/assets/19/dea9bc-88d6-461e-a233-17ed4d8cdc09/original/Taxi.png",
    },
    {
        id: "Uber-X",
        title: "UberX",
        multiplier: 1,
        timeMultiplier: 1.05,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-Pool",
        title: "Uber Pool",
        multiplier: 0.8,
        timeMultiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_633,h_422/v1569012383/assets/f9/2a4534-291c-4c99-9886-d5654fcb8b45/original/Pool.png",
    },
    {
        id: "Uber-XL",
        title: "UberXL",
        multiplier: 1.2,
        timeMultiplier: 1.25,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX",
        title: "Uber LUX",
        multiplier: 1.75,
        timeMultiplier: 1.4,
        image: "https://links.papareact.com/7pf",
    },
    {
        id: "Uber-LUX-Xl",
        title: "Uber LUX XL",
        multiplier: 1.9,
        timeMultiplier: 1.45,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png",
    },
];

const surgeChargeRate = 1.5;
let Dt;
let Ft;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  const calculateDestTime = () => {
      Dt=new Date(new Date().getTime() + (+travelTimeInfo?.duration?.value * 1000));
      console.log(Dt.toLocaleTimeString('it-IT'));
  }

  useEffect(() => {
      calculateDestTime();
  }, [Dt])

  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
          <View style={tw`w-full`}>
              <TouchableOpacity
                  onPress={() => {
                      navigation.navigate('NavigateCard');
                  }}
                  style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}>
                  <Icon name='chevron-left' type="fontawesome" color="black" size={18} />
              </TouchableOpacity>
              <Text style={tw`text-center pt-5 text-xl`}>Select A Ride - {travelTimeInfo?.distance?.text}</Text>
              <Text style={tw`text-center text-lg`}>({travelTimeInfo?.duration?.text})</Text>
          </View>
          <FlatList
              data={data}
              renderItem={({item}) => {
                  const calculateDestTime = () => {
                      Dt=new Date(new Date().getTime() + (+travelTimeInfo?.duration?.value * item.timeMultiplier * 1000));
                      //console.log(Dt.toLocaleTimeString('it-IT'));
                  }
                  calculateDestTime();

                  return (
                      <TouchableOpacity
                          onPress={() => setSelected(item)}
                          style={tw`flex-row items-center justify-between px-10`}
                      >
                          <Image
                              style={{
                                  width: 100,
                                  height: 100,
                                  resizeMode: 'contain',
                              }}
                              source={{ uri: item.image}}
                          />
                          <View style={tw`flex-1 flex-row justify-between`}>
                              <View>
                                  <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                                  <Text>ETA: {
                                      Dt?.toLocaleTimeString('it-IT')
                                  }</Text>
                              </View>
                              <Text style={tw`text-xl font-bold`}>
                                  {new Intl.NumberFormat("en-IN", {
                                      style: "currency",
                                      currency: "INR",
                                  }).format(
                                      (travelTimeInfo?.distance?.value *
                                          surgeChargeRate *
                                          item.multiplier) /
                                      100
                                  )}
                              </Text>
                          </View>
                      </TouchableOpacity>
                  );
              }}
          />
          <View>
              <TouchableOpacity
                  disabled={!selected}
                  style={tw`bg-black py-3 m-3 z-50 ${!selected && "bg-gray-300"}`}>
                  <Text style={tw`text-center text-white text-xl`}>
                      Confirm {selected?.title}
                  </Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
};

export default RideOptionCard;

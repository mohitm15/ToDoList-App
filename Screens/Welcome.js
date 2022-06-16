import React, { useEffect } from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";

const Welcome = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Tasklist");
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      resizeMode="cover"
      style={tw`flex-1`}
    >
      <View style={tw`flex-1 justify-center items-center`}>
        <StatusBar style="light" backgroundColor="midnightblue" />
        <Text style={tw`text-white text-5xl text-center mb-10`}>
          To-Do List
        </Text>
        <Image
          accessibilityLabel="Empty"
          fadeDuration={100}
          style={tw`w-full h-56`}
          source={require("../assets/entry.png")}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome;

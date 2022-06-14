import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";

const Welcome = ({ navigation }) => {
  //console.log("from Welcome -",navigation)
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Tasklist");
    }, 2000);
    
  }, []);

  return (

          
          <View style={tw`flex-1 justify-center items-center bg-indigo-900`}>
            <StatusBar style="light" backgroundColor="midnightblue" />
            <Text style={tw`text-white text-5xl text-center mb-10`}>To-Do List</Text>
            <Image
              accessibilityLabel="Empty"
              fadeDuration={100}
              style={tw`w-full h-56`}
              source={require("../assets/entry.png")}
            />
          </View>


  );
};

const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'#00C0FF'
  },
  text: {
    color: "yellow",
    fontSize: 30,
  }
});

export default Welcome;

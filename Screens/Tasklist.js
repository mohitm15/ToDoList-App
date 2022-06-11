import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";



const Tasklist = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('Addtask');
    }
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Tasklist Screen</Text>
        </View>

        <View style={styles.pressView}>
          <Pressable style={[styles.press,({ pressed }) => ({
                  backgroundColor: pressed ? "green" : "red",
                })]} onPress={handlePress}>
            <Text style={styles.ptext}>+</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08325F",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "yellow",
    fontSize: 30,
  },
  pressView:{
    right:'10%',
    bottom:'10%',
    position:'absolute'
  },
  press: {
    backgroundColor: "red",
    borderRadius: 25,
    borderColor:'white',
    borderWidth:2,
    height: 50,
    width: 50,
    zIndex: 10,
    textAlign: "center",
  },
  ptext: {
    color: "white",
    fontSize: 40,
    marginLeft: "24%",
  },
});

export default Tasklist;

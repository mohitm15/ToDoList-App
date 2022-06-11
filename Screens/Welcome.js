import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Welcome = ({ navigation }) => {
  //console.log("from Welcome -",navigation)
  useEffect(() => {
    setTimeout(() => {
        console.log("entered welcome")
      navigation.navigate("Tasklist");
    }, 2000);
    console.log("exit welcome")
  }, []);

  return (

        <View style={styles.container}>
          <Text style={styles.text}>Welcome Screen</Text>
          <StatusBar style="light" backgroundColor="midnightblue" />
        </View>

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
  }
});

export default Welcome;

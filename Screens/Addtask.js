import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const Addtask = ({navigation}) => {
  const [task, setTask] = useState("");

  const handleSave = () => {

  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="midnightblue" />
      <View>
        <Text style={styles.text}>Add Task Here</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setTask}
          value={task}
          placeholder="Type your task"
          keyboardType="ascii-capable"
        />
      </View>

      <View style={styles.buttoms}>
        <View style={{margin:4}}>
          <Button color={'red'} onPress={()=>{navigation.goBack()}} title="Cancel"></Button>
        </View>
        <View style={{margin:4}}>
          <Button color={'lightblue'} onPress={()=>setTask('')} title="Clear"></Button>
        </View>
        <View style={{margin:4}}>
          <Button color={'green'} onPress={handleSave} title="Save"></Button>
        </View>
      </View>
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
  },
  input: {
    height: 80,
    marginTop: 20,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "black",
    backgroundColor: "white",
    overflow: "visible",
  },
  buttoms: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  }
});
export default Addtask;

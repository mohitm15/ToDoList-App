import React, { useEffect, Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TextInput,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";

const Tasklist = ({ navigation, route }) => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handlePress = () => {
    console.log("submit pressed for task = ", task );

    

    setData(current => [...current,{
      task: task,
      key: Math.floor((Math.random()*Date.now())).toString(),
    }, ]);

    //data.push({task:task, key: Math.random().toString()});

    console.log("data after adding task", data);
    setTask('');
    //navigation.navigate("Tasklist",{data:data})
  };

  const handleDelete = (keygiven) => {
    console.log("del clicked")
    //console.log("filet res = ",data.filter((task)=> keygiven != task.key))
    setData((current) => {
      return current.filter((task) => keygiven  != task.key)
    });
  }
  

  const DATA = [
    {
      key: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      task: "First Item",
    },
    {
      key: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      task: "Second Item",
    },
    {
      key: "58694a0f-3da1-471f-bd96-145571e29d72",
      task: "Third Item",
    },
  ];

  return (
    <>
      <View style={tw`flex flex-col p-5`}>
        <View>
          <Text style={tw`text-white font-bold text-3xl text-center underline`}>
            Tasklist Screen
          </Text>
        </View>

        <View
          style={tw`bg-stone-900 rounded-xl mt-10 p-2 shadow-purple-200 shadow-radius-1 shadow-offset-3`}
        >
          <Text style={tw`text-gray-50 pb-2`}>FlatList</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Fragment>
                <View
                  style={tw`bg-pink-200 my-1 py-2 rounded-xl hover:bg-red-200 flex flex-row justify-around items-center`}
                >
                  <Text style={tw`text-center font-bold`}>{item.task}</Text>
                  <Button title="Del" color='maroon' onPress={()=>{handleDelete(item.key)}} />
                </View>
              </Fragment>
            )}
          />
        </View>

        <View style={tw`bg-stone-900 rounded-xl mt-10 p-5`}>
          <Text style={tw`text-gray-50`}>Text Input</Text>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              color: "white",
              backgroundColor: "gray",
            }}
            onChangeText={setTask}
            value={task}
            placeholder="Add task here"
            keyboardType="ascii-capable"
          />
          <Text
            style={tw`text-base font-bold border-2 rounded-xl hover:bg-stone-400 border-orange-400 p-5 text-blue-200`}
          >
            {task}
          </Text>
        </View>

        <View
          style={tw`bg-stone-900 rounded-xl mt-10 p-2 shadow-purple-200 shadow-radius-1 shadow-offset-3`}
        >
          <Pressable
            style={[
              styles.press,
              ({ pressed }) => ({
                backgroundColor: pressed ? "green" : "red",
              }),
            ]}
            onPress={handlePress}
          >
            <Text style={styles.ptext}>+</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pressView: {
    right: "10%",
    bottom: "10%",
    position: "absolute",
  },
  press: {
    backgroundColor: "red",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 2,
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

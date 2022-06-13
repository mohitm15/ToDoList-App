import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";

const Tasklist = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [modalvisible, setModalvisible] = useState(false);

  const handlePress = () => {
    //console.log("submit pressed for task = ", task);
    if (task.length !== 0) {
      setData((current) => [
        ...current,
        {
          task: task,
          key: Math.floor(Math.random() * Date.now()).toString(),
        },
      ]);
    }
    //data.push({task:task, key: Math.random().toString()});

    //console.log("data after adding task", data);
    setModalvisible(!modalvisible);
    setTask("");
    //navigation.navigate("Tasklist",{data:data})
  };

  const handleDelete = (keygiven) => {
    //console.log("del clicked");
    setData((current) => {
      return current.filter((task) => keygiven != task.key);
    });
  };



  return (
    <>
      <View style={tw`flex flex-col p-5 bg-blue-900 mt-8 h-full`}>
        <View>
          <Text style={tw`text-white font-bold text-3xl text-center underline`}>
            My Tasks
          </Text>
        </View>

        {data.length === 0 ? (
          <View style={tw`flex-1 justify-center items-center`}>
            <Image
              accessibilityLabel="Empty"
              fadeDuration={100}
              style={tw`w-full h-56`}
              source={require("../assets/empty.png")}
            />
            <Text style={tw`text-white text-xl opacity-90 mt-10`}>
              No More Tasks
            </Text>
          </View>
        ) : (
          <View style={tw`bg-stone-900 rounded-xl mt-5 p-2`}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <Fragment>
                  <View
                    style={tw`bg-pink-200 my-1 py-2 rounded-xl hover:bg-red-200 flex flex-row justify-around items-center`}
                  >
                    <MaterialCommunityIcons
                      name="sticker-check"
                      size={24}
                      color="green"
                    />
                    <Text style={tw`text-center font-bold`}>{item.task}</Text>
                    <AntDesign
                      name="delete"
                      size={24}
                      color="red"
                      onPress={() => handleDelete(item.key)}
                    />
                  </View>
                </Fragment>
              )}
            />
          </View>
        )}

        {/* Modal */}

        <Modal
          transparent={true}
          style={tw`bg-yellow-100`}
          visible={modalvisible}
          onRequestClose={() => {
            setModalvisible(!modalvisible);
          }}
        >
          <View style={tw` bg-gray-100/50 flex-1 justify-center items-center`}>
            <View
              style={tw`bg-gray-800  opacity-100 flex-1 mx-10 my-50 rounded-xl`}
            >
              <View style={tw`bg-blue-700 py-2 rounded-t-xl`}>
                <Text style={tw`text-center text-white`}>Add a Task</Text>
              </View>
              <View style={tw`items-center justify-center flex-1 w-full`}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    color: "white",
                    backgroundColor: "gray",
                    width: 300,
                  }}
                  onChangeText={setTask}
                  value={task}
                  placeholder="Add task here"
                  keyboardType="ascii-capable"
                />
              </View>
              <View style={tw`flex flex-row w-full items-center`}>
                <Pressable onPress={() => handlePress()}>
                  <Text
                    style={tw`bg-gray-700 text-white py-2 px-16 text-center`}
                  >
                    Add
                  </Text>
                </Pressable>
                <Pressable onPress={() => setModalvisible(!modalvisible)}>
                  <Text
                    style={tw`bg-gray-700/50 text-white py-2 px-16 text-center`}
                  >
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.pressView}>
          <Pressable
            style={[
              styles.press,
              ({ pressed }) => ({
                backgroundColor: pressed ? "green" : "red",
              }),
            ]}
            onPress={handlePress}
          >
            <Text style={styles.ptext}>
              <AntDesign name="addfile" size={28} color="white" />
            </Text>
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
    bottom: 5,
  },
  ptext: {
    color: "white",
    fontSize: 40,
    marginLeft: "24%",
    marginTop: "10%",
    fontWeight: "bold",
  },
});

export default Tasklist;

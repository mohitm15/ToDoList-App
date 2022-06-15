import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TextInput,
  ImageBackground,
  Modal,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import LinearGradient from "react-native-linear-gradient";

const Tasklist = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [modalvisible, setModalvisible] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const handlePress = () => {
    //console.log("submit pressed for task = ", task);
    if (task.length !== 0) {
      setData((current) => [
        ...current,
        {
          task: task,
          key: Math.floor(Math.random() * Date.now()).toString(),
          isComplete:false,
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

  const handleCheck = (keygiven) => {
    setIsCheck( !data[key].isComplete)
  }



  return (
    <>
    {/* <LinearGradient         colors={['purple', 'white']} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} */}
      <ImageBackground source={require("../assets/bg.png")} resizeMode="cover">
      <View style={tw`flex flex-col p-5 bg-transparent mt-8 h-full`}>
        <View>
          <Text style={tw`text-white font-bold text-3xl text-center underline`}>
            My Tasks
          </Text>
        </View>

        {data.length === 0 ? (
          <View style={tw`mt-20 justify-center items-center`}>
            <Image
              accessibilityLabel="Empty"
              fadeDuration={100}
              style={tw`w-full h-56`}
              source={require("../assets/empty.png")}
            />
            <Text style={tw`text-white text-3xl opacity-70 mt-10`}>
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
                    style={tw`bg-blue-200 my-1 py-2 rounded-xl hover:bg-red-200 flex flex-row  items-center`}
                  >
                    <MaterialCommunityIcons
                      name="sticker-check"
                      size={24}
                      color="green"
                      style={tw`w-2/12 text-center top-0`}
                    />
                    <Text style={tw`text-justify font-bold w-8/12`}>{item.task}</Text>
                    <AntDesign
                      name="delete"
                      size={24}
                      color="red"
                      onPress={() => handleDelete(item.key)}
                      style={tw`w-2/12 text-center`}
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
          animationType="fade"
          onRequestClose={() => {
            setModalvisible(!modalvisible);
          }}
        >
          <View style={tw` bg-gray-100/50 flex-1 justify-center items-center`}>
            <View
              style={tw`bg-gray-900 opacity-100 mx-10 my-10 h-76 rounded-xl w-80 items-center justify-center absolute`}
            >
              
              <View style={tw`bg-blue-700 py-2 mb-4 w-full rounded-t-xl`}>
                <Text style={tw`text-center text-lg text-white`}>Add a Task</Text>
              </View>
              <View style={tw`items-center justify-center w-full`}>
                <TextInput
                  multiline={true}
                  numberOfLines={5}
                  style={tw`bg-gray-200 overflow-hidden px-5 py-4 my-7 text-lg w-11/12 rounded-lg text-justify`}
                  onChangeText={setTask}
                  value={task}
                  placeholder="Add Your Task Here"
                  keyboardType="ascii-capable"
                />
              </View>
              <View style={tw`flex-row w-full `}>
                <Pressable onPress={() => handlePress()}>
                  <Text
                    style={tw`bg-green-700 text-white py-2 px-16 text-center rounded-bl-lg`}
                  >
                    Add
                  </Text>
                </Pressable>
                <Pressable onPress={() => setModalvisible(!modalvisible)}>
                  <Text
                    style={tw`bg-red-700 text-white py-2 px-16 text-center rounded-br-lg`}
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
      </ImageBackground>
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

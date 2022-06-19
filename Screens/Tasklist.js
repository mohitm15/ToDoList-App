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
  Alert,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tasklist = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [modalvisible, setModalvisible] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [prioritystate,setPrioritystate] = useState(3);

  const handlePress = () => {
    console.log("submit pressed for task = ", task);
    if (task.length !== 0) {
      setData((current) => [
        ...current,
        {
          task: task,
          key: Math.floor(Math.random() * Date.now()).toString(),
          isComplete: false,
          priority:prioritystate,
        },
      ]);
    }
    setModalvisible(!modalvisible);
    setTask("");
    Alert.alert("Task Added","Your Task Has Been Added Succesfully", [
      { text:"Cancel" }, {text:"OK"}
    ])
  };

  const handleDelete = (keygiven) => {
    //console.log("del clicked");
    setData((current) => {
      return current.filter((task) => keygiven != task.key);
    });
    Alert.alert("Task Removed","Your Task Has Been Removed Succesfully", [
      { text:"Cancel" }, {text:"OK"}
    ])
  };

  const handleCheck = (keygiven) => {
    for (let i in data) {
      if (data[i].key === keygiven) {
        //db me value change
        if (data[i].isComplete === true) {
          data[i].isComplete = false;
        } else {
          data[i].isComplete = true;
        }

        //jo db me value hai, woh valuye setCHeck ne ischeck me daaldi
        setIsCheck(data[i].isComplete);
        //setIsCheck(!isCheck)
      }
    }
  };

  const setPriorityColor = (prioritystate)=> {
    let colo = ""
    switch (prioritystate) {
      case 1:
          colo = `bg-red-500`
        break;
        case 2:
          colo =  `bg-yellow-500`
        break;
        case 3:
          colo =  `bg-green-500`
        break;
      default:
        colo = `bg-red-500`
        break;
    }
    return colo;
  }

  return (
    <>
      <ImageBackground source={require("../assets/bg.png")} resizeMode="cover">
        <View style={tw`flex flex-col p-5 bg-transparent mt-10 h-full`}>
          <View>
            <Text
              style={tw`text-white font-bold text-3xl text-center underline`}
            >
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
              <Text
                style={tw`text-white text-center text-3xl opacity-70 mt-10`}
              >
                No More Tasks Currently
              </Text>
            </View>
          ) : (
            <View style={tw`border-2 border-stone-200/40 rounded-xl mt-5 p-2`}>
              <FlatList
                data={data.sort((a,b)=>(a.priority - b.priority))}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <Fragment>
                    <View
                      style={tw`bg-blue-100 my-1 py-2 rounded-xl hover:bg-red-200 flex flex-row  items-center ${
                        item.isComplete ? "opacity-80" : "opacity-100"
                      }`}
                    >
                      <MaterialCommunityIcons
                        name={
                          item.isComplete
                            ? "checkbox-marked-outline"
                            : "checkbox-blank-outline"
                        }
                        size={24}
                        color={item.isComplete ? "#189C1A" : "black"}
                        onPress={() => handleCheck(item.key)}
                        style={tw`mr-2 ml-2`}
                      />
                      <Text
                        style={tw`text-justify font-bold w-8/12 ${
                          item.isComplete ? "line-through" : "no-underline"
                        }`}
                      >
                        {item.task}
                      </Text>
                      <AntDesign
                        name="delete"
                        size={24}
                        color="red"
                        onPress={() => handleDelete(item.key)}
                        style={tw`w-2/12 text-center`}
                      />
                      <View style={tw`w-2 rounded-t-md rounded-b-md h-full ${setPriorityColor(item.priority)}`}>
                      </View>
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
            <View
              style={tw` bg-gray-100/50 flex-1 justify-center items-center`}
            >
              <View
                style={tw`bg-gray-900 opacity-100 mx-10 my-10 h-76 rounded-xl w-80 items-center justify-center absolute`}
              >
                <View style={tw`bg-blue-700 py-2 mb-1  w-full rounded-t-xl`}>
                  <Text style={tw`text-center text-lg text-white`}>
                    Add a Task
                  </Text>
                </View>
                <View style={tw`items-center justify-center w-full`}>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={tw`bg-gray-200 overflow-hidden px-5 py-4 my-3 text-lg w-11/12 rounded-lg text-justify`}
                    onChangeText={setTask}
                    value={task}
                    placeholder="Add Your Task Here"
                    keyboardType="ascii-capable"
                  />
                </View>
                <View style={tw`flex-row justify-start items-center p-2 border-2 my-4 border-white/50 rounded-lg`}>
                  <Text style={tw`text-white mx-3`}>Priority : </Text>
                  <TouchableOpacity style={tw`bg-red-500 w-5 h-5 mx-2 rounded-full active:ring-1 active:ring-white`} onPress={()=>setPrioritystate(1)}></TouchableOpacity>
                  <TouchableOpacity style={tw`bg-yellow-500 w-5 h-5 mx-2 rounded-full`} onPress={()=>setPrioritystate(2)}></TouchableOpacity>
                  <TouchableOpacity style={tw`bg-green-500 w-5 h-5 mx-2 rounded-full`} onPress={()=>setPrioritystate(3)}></TouchableOpacity>
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
              onPress={()=>setModalvisible(!modalvisible)}
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
    bottom: "15%",
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

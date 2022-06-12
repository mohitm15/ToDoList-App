import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Tasklist from './Screens/Tasklist';

const Stack = createNativeStackNavigator();


export default function App() {

  //const [task, setTask] = useState('');

  
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: ()=>null}}>
        <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
        <Stack.Screen name='Tasklist' component={Tasklist} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

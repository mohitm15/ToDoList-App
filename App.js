import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';

const Stack = createNativeStackNavigator();



export default function App({navigation}) {

  useEffect(() => {
    setTimeout(()=> {
      console.log("screen appears");
      //navigation.navigate('Welcome');
    },2000)
     console.log("screen bye")
  }, [])
  
  return (
    
    <NavigationContainer>
      <View style={styles.container}>
      <Text>Welcome To ToDO</Text>
      <StatusBar style="light" backgroundColor='midnightblue'  />
      </View>
      <Stack.Screen name='Welcome' component={Welcome} />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'yellow',
    backgroundColor: 'navyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

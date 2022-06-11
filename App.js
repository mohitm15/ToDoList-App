import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Tasklist from './Screens/Tasklist';
import Addtask from './Screens/Addtask';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: ()=>null}}>
        <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
        <Stack.Screen name='Tasklist' component={Tasklist}></Stack.Screen>
        <Stack.Screen name='Addtask' component={Addtask}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

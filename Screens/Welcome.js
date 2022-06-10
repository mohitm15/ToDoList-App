import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Welcome = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <StatusBar style="light" backgroundColor='midnightblue'  />
    </View>
  )
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

export default Welcome
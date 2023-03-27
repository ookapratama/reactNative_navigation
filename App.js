import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import secondScreen from './src/Screen/SecondScreen';
import thirdScreen from './src/Screen/ThirdScreen';

const Stack = createStackNavigator();

export default function App() {
  

  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Second"
          component={secondScreen}
          options={{headerShown: false}}
          />
        <Stack.Screen
          name="Third"
          options={{headerShown: false}}
          component={thirdScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const style = StyleSheet.create({
//   container : {
//     flex: 1,
//     backgroundColor: '#C7AA74',
//     alignItems: 'center',
//     justifyContent: 'center' 
//   },
// });
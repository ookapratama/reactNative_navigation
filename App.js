import React from 'react';
import {} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import first from './src/firstScreen';
import second from './src/secondScreen';

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='1'
          component={first}
        />

        <Stack.Screen
          name='2'
          component={second}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
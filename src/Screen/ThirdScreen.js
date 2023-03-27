import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ThirdScreen() {
   const navigation = useNavigation();
   return (
    <View style={style.container}>
      <Text style={{fontSize: 35, marginBottom: 20}}>Second Screen</Text>
      <Button
        title="To First Screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7AA74',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

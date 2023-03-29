import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native/Libraries/Components/Button';
import { useNavigation } from '@react-navigation/native';

export default function firstScreen() {
   const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Ini Halaman Pertama</Text>
      <Button 
         title="Ke Halaman Kedua" 
         onPress={() => navigation.navigate('2') }
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
    backgroundColor: blue,
  },
});

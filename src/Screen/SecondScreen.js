import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SecondScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={{fontSize: 35, marginBottom: 20}}>First Screen</Text>
      <Button
        title="To Second Screen"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#C7AA74',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

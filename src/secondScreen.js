import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native/Libraries/Components/Button';

export default function firstScreen() {
   const navigation = useNavigation();
   return (

      <View style={style.container}>
         <Text>
            Ini Halaman Kedua
         </Text>
         <Button
            title='Ke Halaman Pertama'
            onPress={() => navigation.navigate('1')}
         />
      </View>

   );
}

const style = StyleSheet.create({

   container : {
      flex:1,
      justifyContent:center,
      alignItems: center,
      backgroundColor: blue
   }
   
});
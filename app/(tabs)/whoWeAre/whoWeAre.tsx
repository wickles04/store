import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView, View,Image, } from 'react-native';



export function whoWeAre() {
    function handlePressButtonSP(){
        router.replace("/SP");
    }
    
    function handlePressButtonRJ(){
        router.replace("/RJ");
    }
    
  return (
    <SafeAreaView>
      <Image 
        source={require('../img/images.png')}
        resizeMode='contain'
      />
      <View >
      <Text >Book</Text>

      <Button text="Conhecer filial de São Paulo" function={handlePressButtonSP}/>

    </SafeAreaView>
  );
}
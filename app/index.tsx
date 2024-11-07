import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../img/images.png')}
        resizeMode='contain'
        style={styles.logo}
      />
      <View style={styles.tituloContainer}>
      <Text style={[styles.titulo, styles.destaque]}>Book</Text>
      <Text style={styles.titulo}>Store</Text>

      </View>
      <Text>Aqui onde seu dinheiro vira saudade!!</Text>

    </SafeAreaView>
  );
}

const styles= StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  titulo:{
    fontSize:32,
    fontWeight:"600"
  },
  logo:{
    width:250,
    height:250
  },
  text:{
    fontSize:16
  },
  tituloContainer:{
    flexDirection:'row',
    gap:8
  },
  destaque:{
    color:"#e76096"
  }
})




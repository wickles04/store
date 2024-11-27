import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/Button/button';



export default function whoWeAre() {

  function handlePressButtonRJ(){
    router.navigate("/whoWeAre/RJ");
  }
  function handlePressButtonSP(){
    router.navigate("/whoWeAre/SP");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../../../img/images.png')}
        resizeMode='contain'
        style={styles.logo}
      />

      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Quem somos</Text>
      </View>

      <Text style={styles.text}>Bem-vindo à Book Store!</Text>
      <Text style={styles.text}>Somos uma livraria com uma fachada rosa encantadora e uma vasta coleção de livros. Nossa equipe está pronta para ajudar com recomendações personalizadas. Venha nos visitar e descubra a magia dos livros!</Text>

      <View style={styles.filiais}>
        <Text  style={styles.textFiliais}> Conheça nossas filiais em:</Text>
        <View style={styles.botoes}>
          <Button text="SP" function={handlePressButtonSP}/>
          <Button text="RJ" function={handlePressButtonRJ}/>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles= StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    gap:20
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
    fontSize:16,
    width:350,
    textAlign:'center'
  },
  tituloContainer:{
    flexDirection:'row',
    gap:8
  },
  destaque:{
    color:"#e76096"
  },
  buttonAreaContainer: {
    gap:16,
    justifyContent:"center",
    alignItems:"center"
  },
  botoes: {

    flexDirection:"row",
    justifyContent:'center',
    gap: 20,

  },
  filiais:{
    gap:10
  },
  textFiliais:{
    fontWeight:"600",
    textAlign:'center'
  }
})
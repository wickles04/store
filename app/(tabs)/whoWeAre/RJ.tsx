
import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function RJ() {

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../../../img/filialriodejaneiro.png')}
        resizeMode='contain'
        style={styles.logo}
      />
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Filial - Rio de Janeiro</Text>
      </View>
      <Text style={styles.text}>Bem-vindo ao paraíso dos leitores! Nossa fachada rosa brilhante é apenas o começo de uma jornada literária inesquecível. Entre e descubra uma vasta coleção de livros que vão desde clássicos atemporais até os lançamentos mais recentes. Um lugar onde cada página vira uma nova aventura!</Text>
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
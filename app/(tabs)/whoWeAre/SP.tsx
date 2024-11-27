
import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function SP() {

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../../../img/filialsaopaulo.png')}
        resizeMode='contain'
        style={styles.logo}
      />
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Filial - São Paulo</Text>
      </View>
      <Text style={styles.text}>Transforme seu dia com uma visita à nossa livraria encantadora! Com uma fachada em rosa suave e uma logo de livros que exala charme, nossa loja é o destino perfeito para quem busca inspiração e conhecimento. Venha e deixe-se envolver pelo mundo mágico dos livros!</Text>
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
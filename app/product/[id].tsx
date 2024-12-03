import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getProductById } from '../../services/product';


export default function product() {
    const {id} = useLocalSearchParams();
    const idProduct = parseInt(id as string);
    const product = getProductById(idProduct);
    if (!product) return router.back

  return (
    <View style={styles.container}>
        <Stack.Screen options={{
            headerShown:true,
            title:""
        }}/>
        <Image
            style={styles.image}
            resizeMode='contain'
            source={{uri:product.image}
            
        }
        />
        <View style={styles.caixaTexto}>
            <Text style={styles.titulo}>{product.title}</Text>
            <Text>{product.description}</Text>
        </View>

        <Text> {product.price} </Text>
  

        </View>
  );
}

const styles= StyleSheet.create ({
    container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      gap:16
    },
    image:{
        width:380,
        height:250,
        borderRadius:12
    },
    caixaTexto:{
        width:380,
        padding:16,
        borderWidth:1,
        borderColor:'#e76096',
        borderRadius:12,
        alignItems:'center',
        gap:16,

    },
    titulo:{
        fontSize:26,
        fontWeight:'600'
    }
});
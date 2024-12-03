import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getProductById } from '../../services/product';


export default function product() {
    const {id} = useLocalSearchParams();
    const idProduct = parseInt(id as string);
    const product = getProductById(idProduct);
    if (!product) return router.back
    const Enviar = () => {
 
        Alert.alert(`Você comprou o ${product.title} e gastará mais R$${product.price}`);
      }

  return (


    <View style={styles.container}>
        <Stack.Screen options={{
            headerShown:true,
            title:""
        }}/>
        <View style={styles.top}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{uri:product.image}
                
            }
            />
            <View style={styles.textBox}>
                <Text style={styles.title}>{product.title}</Text>
                <Text>{product.description}</Text>
            </View>

            <View style={styles.priceBox}>
                <Text style={styles.price}> R${product.price} </Text>
            </View>
        </View>

        <TouchableOpacity style={styles.buyBox} onPress={Enviar}>
            <Text style={styles.buyText}>Comprar</Text>
        </TouchableOpacity>

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
    top:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center',
        gap:16,
        marginTop:16
    },
    image:{
        width:380,
        height:300,
        borderRadius:12
    },
    textBox:{
        width:380,
        padding:16,
        borderWidth:1,
        borderColor:'#e76096',
        borderRadius:12,
        alignItems:'center',
        gap:16,
    },
    title:{
        fontSize:26,
        fontWeight:'600'
    },
    priceBox:{
        width:380,
        height:70,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(231, 96, 150, 0.2)',
    },
    price:{
        color:'#e76096',
        fontSize:26
    },
    buyBox:{
        backgroundColor:'#e76096',
        width:380,
        height:46,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:16
    },
    buyText:{
        color:'white',
        fontSize:16,
        fontWeight:'500'
    }
});
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { getProductsByCategory } from '../../../services/product';
import { getCategoryById } from '../../../services/category';
import { ProductItem } from '../../../components/ProductItem/productItem';



export default function category() {

    const {id} = useLocalSearchParams();
    const idCategory = parseInt(id as string);

    const category = getCategoryById(idCategory);
    const products = getProductsByCategory(idCategory);
    if (!category) return router.back
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:category.title}}/>
        <FlatList
        data={products}
        renderItem={({item})=><ProductItem productData={item}/>}
        keyExtractor={item => item.id.toString()}
        />
        

        
    </View>
  );
}

const styles = StyleSheet.create ({
    container : {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    }
})
import React from 'react';
import { Image, Pressable, View, Text} from 'react-native';

import { styles } from './categoryItemStyle';
import { router } from 'expo-router';
type Props={
    categoryData:Category
}
export function CategoryItem({categoryData}: Props) {

    function handlePress(){
        router.navigate(`/categories/${categoryData.id}`);
    }

  return (

    <Pressable onPress={handlePress} style={styles.container}>
        <Image style={styles.imageLayer}
        source={{uri: categoryData.cover}}
        />
        <View style={styles.blackColorLayer}></View>
        <View style={styles.textLayer}>
        <Text style={styles.text}>{categoryData.title}</Text>
        </View>
    </Pressable>
  );
}
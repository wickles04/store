import React from "react";
import {View, StyleSheet ,Text, FlatList } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/CategoryItem/categoryItem";
const categoryList = getAllCategories();

export default function categoriesScreen(){


    return(
        <View style={styles.container}>
            <FlatList 
            data={categoryList}

            renderItem={({item})=><CategoryItem categoryData={item}/>}

            keyExtractor={item=>item.id.toString()}
            />
        </View>

    );
}

const styles= StyleSheet.create ({
    container: {

        marginHorizontal:8
    }
})

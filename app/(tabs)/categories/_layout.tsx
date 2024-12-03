import React from 'react';
import { Stack } from 'expo-router';

export default function CategoriesLayout() {


  return (

    <Stack>
        <Stack.Screen name="categoriesScreen"
            options={{title:"lista de Categorias"}}
        />
        <Stack.Screen name="[id]"
          
            
        />


    </Stack>
  );
}
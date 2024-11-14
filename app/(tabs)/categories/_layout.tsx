import React from 'react';
import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack>
        <Stack.Screen name="categories"
            options={{title:"lista de Categorias"}}
        />


    </Stack>
  );
}
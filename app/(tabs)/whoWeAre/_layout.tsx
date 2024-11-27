import React from 'react';
import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack screenOptions={{headerShown:true}}>
      <Stack.Screen name='whoWeAre'  options={{title:"Quem somos"}}/>
      <Stack.Screen name='SP' options={{title:"Filial - São Paulo"}}/>
      <Stack.Screen name='RJ'options={{title:"Filial - Rio de Janeiro"}}/>

    
    </Stack>
  );
}
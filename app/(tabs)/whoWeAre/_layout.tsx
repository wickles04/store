import React from 'react';
import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='whoWeAre'  />
    <Stack.Screen name='SP'/>
    <Stack.Screen name='RJ'/>
    
</Stack>
  );
}
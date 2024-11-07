import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:true}}>
            <Stack.Screen name='index'  />
            <Stack.Screen name='(tabs)'/>
            
        </Stack>
    )
}
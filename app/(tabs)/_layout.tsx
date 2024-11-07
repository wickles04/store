import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function RootLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'blue'}}>
            <Tabs.Screen name="index" 
            options={{title: 'Home', 
            tabBarIcon: ({color}) => <FontAwesome size={24} name="house" color={color} />}} />

            <Tabs.Screen name="category" options={{title: 'inicio', 
            tabBarIcon: ({color}) => <FontAwesome size={24} name="layer-group" color={color} />
            
            }} />


           
        </Tabs>
    )
}
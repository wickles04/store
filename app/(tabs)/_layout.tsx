import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function RootLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'#e76096', headerShown:true}}>
            <Tabs.Screen 
                name="home" 
                options={{title: 'inicio', 
            tabBarIcon: ({color}) => <FontAwesome 
            size={24} 
            name="house" 
            color={color} />}} />

            <Tabs.Screen 
            name="categories" 
            options={{title: 'Categorias', 
            headerShown:false,
            tabBarIcon: ({color}) => 
            <FontAwesome 
            size={24} 
            name="layer-group" 
            color={color} /> }} />

            <Tabs.Screen 
            name="QS" 
            options={{title: 'Quem somos', 
            headerShown:false,
            tabBarIcon: ({color}) => 
            <FontAwesome 
            size={24} 
            name="layer-group" 
            color={color} />

            
            }} />


           
        </Tabs>
    )
}
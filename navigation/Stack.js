import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../Screen/Detail';
import Tabs from './Tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();


export default ()=>(
    <Stack.Navigator         
        screenOptions={{        
            headerStyle : {
                backgroundColor : "black" ,
                borderWidth : 2,
                borderBottomColor : "white" ,
            },
            headerTintColor : "white" ,
            headerBackTitleVisible : false ,
            }
                
        }        
    >
        <Stack.Screen 
            name ="Tab" 
            options={{ headerTitleAlign : 'center' }} 
            component={Tabs}               
        />
        <Stack.Screen 
            name ="Detail" 
            options={{ headerTitleAlign : 'center' }} 
            component={Detail}
        />
    </Stack.Navigator>
)
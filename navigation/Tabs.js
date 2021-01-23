import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute} from "@react-navigation/native"
import { Ionicons  } from "@expo/vector-icons";
import Movies from '../Screen/Movies';
import Tv from '../Screen/Tv';
import Favs from '../Screen/Favs';
import Search from '../Screen/Search';
import React , { useEffect , useLayoutEffect} from 'react';
import { Platform } from "react-native";



const Tabs = createBottomTabNavigator();

const getHeaderName = route => getFocusedRouteNameFromRoute(route) || "Movies";

export default ( {navigation , route})=> 
{
   useLayoutEffect(()=>{           
       navigation.setOptions({
            title :  getHeaderName(route) ,         
        }) 
   }
   , [route]);
    
    return (
        <Tabs.Navigator 
            screenOptions = {({route})=> ({
                tabBarIcon :  ({focused}) => {
                    let iConName = Platform.OS ==="ios" ? "ios-" : "md-";                       
                    switch (route.name) {
                        case "Movies":
                            iConName += "film" ;
                            break;
                        case "Tv" :
                            iConName += "tv" ;
                            break;
                        case "Search":
                            iConName += "search" ;
                            break;
                        case "Favourites":
                            iConName += "heart" ;
                            break;
                        default:
                            iConName += "hearts" ;
                            break;
                    }                  
                    return <Ionicons name= {iConName}  size={24} color={focused ? "white": "grey" }/> ;
                }
            })}
            tabBarOptions={{
                showLabel : false,
                style :{
                    backgroundColor : "black" ,                   
                }
            }}
        >
            <Tabs.Screen           
                name="Movies" 
                component={Movies}
            />
            <Tabs.Screen name="Tv" component={Tv}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Favourites" component={Favs}/>        
        </Tabs.Navigator>
    );
}

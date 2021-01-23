import React from 'react';
import {View, Text, Button} from "react-native";


export default ({navigation})=> {  
    
    return ( 
        <View style ={{
            backgroundColor : "black",
            flex : 1
        }}>
            
            <Text style={{color:"white"}}>Movies</Text>      
            <Button 
                color = "black"
                title="Movie"         
                onPress={()=> navigation.navigate("Detail")} 
            />     
        </View>
    );    
} 


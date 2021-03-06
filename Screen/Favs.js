import React ,{ useState , useEffect } from 'react';
import {View, Text} from "react-native";
import {movieApi} from "../api";

export default ()=> {
    
    const [movies , setMovies] = useState({
        results : [],
        error : null 
    })

    const getData = async ()=>{
        const [ results , error]  = await movieApi.discover(); 
        setMovies({
            results , 
            error
        });
    }
    
    useEffect(()=>{
        getData();
    },[])

    return ( 
        <View style ={{
            backgroundColor : "white",
            flex  : 1 ,
        }}>
            <Text>{movies.results.length}</Text>
        </View>
    );
};

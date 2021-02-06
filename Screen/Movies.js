
import React , { useEffect , useState } from 'react';
import {View, Text, Button} from "react-native";
import { movieApi } from "../api" ;


export default ()=> {  
    
    const [movies , setMovies] = useState({
       nowPlaying : [],
       nowPlayingerror : null,
       popular : [],
       popularerror : null ,
       upComing : [] ,
       upComingerror : null ,       
    });


    
    const getData = async()=> {
       console.log("GETTING DATA");
       const [nowPlaying , nowPlayingerror] = await movieApi.nowPlaying();
       const [popular , popularerror ]  = await movieApi.popular();
       const [upComing , upComingerror] = await movieApi.upComing();

       setMovies({
            nowPlaying ,
            nowPlayingerror,
            popular,
            popularerror,
            upComing,
            upComingerror,
       });
    }

    useEffect(()=>{
        getData();
    },[]);

    return ( 
        <View style ={{
            backgroundColor : "black",
            flex : 1
        }}>           
            <Text style={{color:"white"}}>{movies.nowPlaying?.length}</Text>                   
        </View>
    );    
} 


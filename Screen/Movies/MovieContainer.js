
import React , { useEffect , useState } from 'react';
import {View, Text, Button} from "react-native";
import { movieApi } from "../../api" ;
import MoviePresenter from "./MoviePresenter";

export default ()=> {  
    
    const [movies , setMovies] = useState({
       loading : true ,
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
            loading : false, 
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
       <MoviePresenter {...movies}/>
    );    
} 


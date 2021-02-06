
import React , { useEffect , useState } from 'react';
import {View, Text, Button} from "react-native";
import { tvApi } from "../api" ;

export default ()=> {
    const [tvies , setTvies] = useState({
        today : [],
        todayerror : null,
        topRated : [],
        topRatederror : null ,
        thisweek : [] ,
        thisweekerror : null ,  
        popular : [] , 
        popularerror : null ,     
     });

     const getData = async()=> {
        console.log("GETTING DATA");
        const [today , todayerror] = await tvApi.today();
        const [topRated , topRatederror ]  = await tvApi.topRated();
        const [thisweek , thisweekerror] = await tvApi.thisWeek();
        const [popular , popularerror] = await tvApi.popular();
        setTvies({
            today ,
            todayerror,
            topRated,
            topRatederror,
            thisweek,
            thisweekerror,
            popular,
            popularerror,
        });
     }

    useEffect(()=>{
        getData();
    }, [])

    return (     
            <View style ={{
                backgroundColor : "black" ,
                flex : 1
            }}>
                <Text style={{color:"white"}}>{tvies.today?.length}</Text>  
            </View>
    );

};

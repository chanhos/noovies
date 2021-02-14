import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView} from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const {width : WIDTH  , height : HEIGHT } = Dimensions.get("window");



const SlideContainer = styled.View`
    width : 100%
    height : ${HEIGHT/3}px;
    margin-bottom : 50px;        
`;

const Container = styled.View`    
`;




export default ( { loading , nowPlaying, popular , upComing } ) => {    
    
    const styleObj = {
        Scrolview : {
            backgroundColor : "black" ,            
        },
        ScrolviewContainer : {           
            justifyContent :  loading ? "center" : "flex-start",
            paddingTop : 20 , 
            flexGrow : 1,
        }
        
    }

    return (
        <ScrollView 
            Vertical 
            style={ styleObj.Scrolview } 
            contentContainerStyle = { styleObj.ScrolviewContainer} 
            showsVerticalScrollIndicator={true} 
            showsHorizontalScrollIndicator={true}
            indicatorStyle={'white'}              
        >
            
            { loading ? ( 
            <ActivityIndicator size = "large" color = "white"/>
            )  : ( 
            <>
                <SlideContainer>
                    <Swiper controlsEnabled={false} loop timeout={10} >
                        {nowPlaying.map( movie => (
                            <Slide key={movie.id} 
                                id={movie.id} 
                                title={`${movie.title}(${movie.original_title})`}
                                backgroundImage={movie.backdrop_path}
                                posterImage={movie.poster_path}
                                votes={movie.vote_average}
                                overview={movie.overview}
                            />                    
                        ))}
                        
                    </Swiper>            
                </SlideContainer>
                <Container>
                    <Title title={"Popular Movies"}/>
                    <ScrollView 
                        style = { { marginTop : 20, marginBottom : 40 }}
                        horizontal 
                        contentContainerStyle= { {paddingLeft : 30} } 
                        showsHorizontalScrollIndicator={false}
                    >                        
                        {popular.map( movie => (
                            <Vertical key={movie.id}
                                id = {movie.id}
                                title={`${movie.title}(${movie.original_title})`}
                                poster={movie.poster_path}
                                votes={movie.vote_average}                               
                            />
                        ))}
                    </ScrollView>
                    <Title title={"Comming Soon"}/>
                    { upComing.map( movie=>(
                        <Horizontal key={movie.id}
                            id = {movie.id}
                            title={`${movie.title}(${movie.original_title})`}
                            poster={movie.poster_path}
                            votes={movie.vote_average}
                            overview={movie.overview}
                        />
                    ))}
                </Container>               
            </>
            )}            
        </ScrollView>
       
    );
}



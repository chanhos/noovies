import axios from "axios";

const TMDB_KEY = "f4dd1e40d78953ac69f1cac24ea03a6f" ;

const makeRequest = (path , params) => axios.get(`https://api.themoviedb.org/3${path}`,{
    params : {
        ...params,
        api_key : TMDB_KEY ,
    }
});


const getAnything = async (path, params = {}) =>{
  try {
      const {
          data : {results} , 
          data 
      } = await makeRequest(path,params);    
      return [ results || data , null];
  } catch (e) {    
      return [ null , e];
  }    
};


export const movieApi = {
    nowPlaying  : ()=> getAnything('/movie/now_playing' , {region : "kr" , language : "ko"} ),
    popular : ()=> getAnything('/movie/popular', {region : "kr" , language : "ko"}) ,
    upComing : ()=> getAnything('/movie/upcoming', {region : "kr" , language : "ko"} ), 
    search : query => getAnything('/search/movie' , { query , region : "kr" , language : "ko" }), 
    movie : id => getAnything(`/movie/${id}`, { language : "ko" } ) , 
    discover : () => getAnything('/discover/movie' , {region : "kr" , language : "ko"}) , 
} 


export const tvApi = {
    today : () => getAnything('/tv/airing_today', { language : "ko" } ),
    thisWeek : () => getAnything('/tv/on_the_air', { language : "ko" } ),
    topRated : ()=> getAnything('/tv/top_rated', { language : "ko" }),
    popular : ()=> getAnything('/tv/popular', { language : "ko" } ),
    search : query => getAnything('/search/tv', { query,  language : "ko" , include_adult : true } ) ,
    show : id => getAnything(`/tv/${id}`, { language : "ko" }) , 
}
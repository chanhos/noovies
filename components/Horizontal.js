import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from "./Poster"; 
import Votes from './Votes';


const Container = styled.View`
    padding : 0px 30px;   
    margin-top : 30px;
    margin-bottom : 30px;
    flex-direction : row;    
    align-items : flex-start;
`;

const Data = styled.View`    
    width : 50%;
`;

const Title  = styled.Text`
    color : white;
    font-weight : 500;
    font-size : 
    margin : 10px 0px 5px 0px;
`;



const Overview = styled.Text`
    color : rgb(220,220,220);    
    font-size : 14px;
    font-weight : 500;
`;

const Horizontal = ( {id, poster , title , votes, overview})=>{
    return (        
        <Container>            
            <Poster url={poster}/>
            <Data>
                {/*<Title>{ title.length > 10 ? `${title.slice(0,10)}...` : title }</Title>*/}
                <Votes votes={votes}/>
                {/*<Overview>{ overview.length > 90 ? `${overview.slice(0,90)}...` : overview }</Overview>*/}
            </Data>           
        </Container>       
    );
};


Horizontal.propTypes = {
    id : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
    overview : PropTypes.string.isRequired,
};

export default Horizontal;
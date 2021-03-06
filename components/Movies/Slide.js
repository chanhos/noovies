import React from 'react';
import styled from 'styled-components/native';
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from '../Poster';
import Votes from '../Votes';
import { TouchableOpacity } from 'react-native';
import { trimText } from '../../Utility/trimText';

const Container = styled.View`
    width : 100%;
    height : 100%;
`;

const BG = styled.Image`
    width : 100%;
    height : 100%;
    opacity : 0.4;
    position : absolute;
`;

const Content = styled.View`
    height : 100%;
    flex-direction : row;
    align-items : center;
    justify-content : space-around;
`;

const Data = styled.View`
    width : 50%;
    align-items : flex-start;
`;

const Title = styled.Text`
    color : white;
    font-weight : bold;
    font-size : 18px;
    margin-bottom : 10px;
`;

const VotesContainer = styled.View`
    margin-bottom : 7px;
`;

const Overview = styled.Text`
    color : rgb(220,220,220);    
    font-size : 14px;
    font-weight : 500;
`;


const Button  = styled.View`
    margin-top : 10px;    
    background-color : #e74c3c;
    padding : 5px 10px;
    border-radius : 5px;
`;

const ButtonText  = styled.Text`
    color : white;
`;

const Slide = ( {id, title , backgroundImage, posterImage , votes , overview} )=>{
    return (
        <Container>            
            <BG 
               resizeMode="cover"
               source={ { uri : apiImage(backgroundImage)}} 
            />
            <Content>
                <Poster url={posterImage}/>
                <Data>
                    <Title>{trimText(title,25)}</Title>
                    <VotesContainer>
                        <Votes votes={votes}/>
                    </VotesContainer>
                    <Overview>{trimText(overview,90)}</Overview>
                    <TouchableOpacity >
                        <Button>
                            <ButtonText>View Details</ButtonText>
                        </Button>                        
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    );
};

Slide.prototype = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    backgroundImage : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
    overview : PropTypes.string.isRequired,
};

export default Slide;
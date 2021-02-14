import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../api';
import Poster from "./Poster"; 
import Votes from './Votes';
import { TouchableOpacity } from 'react-native';
import { trimText } from '../Utility/trimText';


const Container = styled.View`
    align-items : center;
    width : 120px;
`;


const Title  = styled.Text`
    color : white;
    font-weight : 500;
    margin : 10px 0px 5px 0px;
`;

const Vertical = ( {id, poster , title , votes})=>{
    return (
        <TouchableOpacity>
            <Container>
                <Poster url={poster}/>
                <Title>{trimText(title,10)}</Title>
                <Votes votes={votes}/>
            </Container>
        </TouchableOpacity>
    );
};


Vertical.propTypes = {
    id : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
};

export default Vertical;
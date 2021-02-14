import React from 'react';
import styled from 'styled-components/native';
import ProTypes from "prop-types";
import { apiImage } from '../api';

const Image = styled.Image`
    width : 100px;
    height : 160px;
    border-radius : 4px;
`;

const Poster = ({url}) => {
    return (
        <Image source={ {uri: apiImage(url)} }/>
    );
};


Poster.propTypes = {
    url : ProTypes.string.isRequired
}

export default Poster;
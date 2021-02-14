import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';


const Text = styled.Text`
    color : rgb(220,220,220);    
    font-size : 12px;
    font-weight : 800;  
`;

const Votes = ({votes}) => {
    return (
        <Text>⭐ {votes}/ 10</Text>
    );
};

Votes.propTypes = {
    votes : PropTypes.number.isRequired,
}

export default Votes;

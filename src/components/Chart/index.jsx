import React from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

const GraphWrapper = styled.div`
    width: 100%;
    height: 800px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
    display: inline-block;
    justify-content: center;
    text-align: center;
    vertical-align: center;
`;

const Graph = () => (
    <GraphWrapper>
        graph goes here
    </GraphWrapper>
);

export default Graph;

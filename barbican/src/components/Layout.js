import React from 'react';
import Containers from 'react-bootstrap/Container';
import styled from 'styled-components';

const Container = styled.div`
    

`;

export const Layout = (props) => (
    <Container fluid>
        {props.children}
    </Container>
)
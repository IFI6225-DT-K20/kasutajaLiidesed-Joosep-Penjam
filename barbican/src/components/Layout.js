import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Container = styled.Container`

    .container{
        width:100%;
    }

`;

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)
import React from 'react';
import Container from 'react-bootstrap/Container';
/*import styled from 'styled-components';*/




export const Layout = (props) => (
    <Container fluid padding-left="0">
        {props.children}
    </Container>
)
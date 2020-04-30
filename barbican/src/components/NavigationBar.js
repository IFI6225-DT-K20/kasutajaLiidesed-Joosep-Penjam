import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

    .navbar{
        background-color: #ff5900;
    }

    .navbar-brand, .navbar-nav .nav-link {
        font-family: sans-serif;
        font-weigth: bold;
        color: white;

        &:hover{
            color: grey;
        }
    }

    .navbar-brand{
        font-size: 3.5vh;
        
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="./home">barbican</Navbar.Brand>
            
            
        </Navbar>

        
    </Styles>
)

/*
<Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse className="collapse" id="basic-navbar-nav" >
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>


*/ 
import React from 'react';

import {FormControl, Button, DropdownButton, ButtonGroup, SplitButton,Dropdown,Container, Nav, Navbar, Image} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../Assets/logo.svg';

const Styles = styled.div`

    .navbar, .dropdown{
        background-color: #ff5900;
        
    }

    .iconBar{
        border-bottom: 1px solid #ededed;
    }
    
    button{
        color:white;
        font-weight: bold;
    }

    .mr-sm-2{
        width: 100px;
        background-color: #ff5900;
        border-color: #ff5900;

        &:active{
            
        }
    }
    
    .navbar-brand, .navbar-nav .nav-link {
        font-family: Futura-Book,Arial,Helvetica,sans-serif;
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

        <Navbar className="iconBar" expand="lg">
            <Navbar.Brand href="/"><Image src={logo}></Image></Navbar.Brand>

            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Navbar>

        <Navbar className="navMenu">
            <>  
                {['Whats on', 'Your visit', 'Join & support', 'Take part'].map(
                    (variant) => (
                        <>
                            <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                            >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>{' '}
                        </>
                    ),
                )}
            </>
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
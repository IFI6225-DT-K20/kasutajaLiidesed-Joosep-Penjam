import React from 'react'
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { Image,Button} from 'react-bootstrap';
// eslint-disable-next-line
import backVideo from './Assets/backVideo.mp4';
import boat from './Assets/boat.jpg';
import newsletters from './Assets/newsletters.png';

const Styles = styled.div `

    h1{
        font-family: Futura-Book,Arial,Helvetica,sans-serif;
        font-size: 5rem;
        font-weight: bold;
    }

    .jumbotron{
       background: url(${boat}) no-repeat fixed bottom;
       background-size: cover;
       color: white;
       height: 600px;
       position: relative;
       z-index: -2;
       margin-bottom: 0;
    }

    button{
        font-weight: bold;
    }

    .welcomeBtn{
        z-index: 1;
        background-color: #ff5900;
        border-color: #ff5900;
        
    }

    .newsButton{
        color: #ff5900;
        background-color: white;
        border-color: #ff5900;
        
    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .newsLetter{
        background-color: #ff5900;
        height: 150px;
        font-weight: bold;
    }
    
    .footer{
        background-color: #1d1d1d;
        color:white;
    }

`;

export const Home = () => (
    <Styles>
        <Jumbo className="jumbo">
            <div className="overlay"></div>
            <Container className="welcomeText">
                <h1>Welcome to</h1>
                <h1>the Barbican</h1>
                <Button className="welcomeBtn" variant="primary" size="lg">
                    -> Read, watch & listen
                </Button>{' '}
            </Container>
        </Jumbo>

        <div className="newsLetter">
            <p>Sign up to our newsletter</p>
            {/*<Image src={newsletters}></Image>*/}
            <Button className="newsButton" variant="primary" size="lg">
                    -> Sign up
            </Button>{' '}
        </div>

        <div className="footer">
            <h2>Contact us</h2>
            <p>About</p>
            <h3>Contact the Box office</h3>
            <p>For queries relating to you booking, please see our FAQs or contact us on:</p>
        </div>
    </Styles>
)

/*<div>
    <video autoPlay="autoPlay" loop="loop" muted className="promoVideo">
        <source src={backVideo} type="video/mp4"/>
    </video>

    <div className="promoText"> 
        <p>Tere</p>
    </div>
</div>*/
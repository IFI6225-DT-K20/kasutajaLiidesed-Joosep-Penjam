import React from 'react'
import backVideo from './Assets/backVideo.mp4';
import styled from 'styled-components';

const Styles = styled.div`
    .promoVideo{
        text-align: right;
    }

`;


export const Home = () => (
    <Styles>
        <div>
            <video autoPlay="autoPlay" loop="loop" muted className="promoVideo">
                <source src={backVideo} type="video/mp4"/>
            </video>

            <p>Siin on paragraph mille pikkus on adekvaatne</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut facilisis ex. Etiam vitae felis ac justo luctus pellentesque non vel dui. Praesent imperdiet lacus sed lacinia lacinia. Sed porttitor ipsum ac orci blandit interdum. Nulla id augue dictum, rutrum odio eu, tempor justo. Curabitur pellentesque scelerisque commodo. Fusce et ultricies justo, eget lobortis velit.</p>
            <p>Proin non consectetur diam. Vivamus mollis rutrum libero gravida euismod. Mauris in vestibulum arcu. Mauris sit amet risus non elit elementum imperdiet. Quisque consequat libero eget imperdiet scelerisque. Nulla rhoncus nunc id justo interdum, nec aliquet velit posuere. Nunc euismod, nisl eu sodales luctus, magna est rhoncus sem, non bibendum nisl libero suscipit augue. Sed vel luctus mauris. Curabitur congue, dolor quis bibendum efficitur, velit felis ornare odio, vitae iaculis felis turpis eu leo.</p>
        </div>
    </Styles>
)


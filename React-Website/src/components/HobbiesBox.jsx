import React from 'react';
import styled from 'styled-components';
import Boulder from '../assets/Group 22.svg';

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 0.1fr 0.2fr 0.6fr 0.1fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    padding: 3rem;

    min-height: 120vh;
    min-width: 100vw;
    box-sizing: border-box;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;  /* stack on smaller screens */
        text-align: center;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;
`;

const BodyText1 = styled.p`
    font-family: 'Inter', sans-serif; 
    font-size: clamp(0.5rem, 3vw, 2rem);
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
`;

const ColourText = styled.span`
    color: #D0A757;
`;

const BoulderImg = styled.img`
    width: 110%;
    max-width: 700px;
    height: auto;
    transform: rotate(180deg);
`;

export default function HobbiesBox() {
    return (
        <GridWrapper>
            <div></div>
            <BoulderImg src={Boulder} alt="Boulder" />
            <TextBox>
                <HeaderText> My hobbies include <ColourText>bouldering, drumming, and Muay Thai.</ColourText></HeaderText>
                <BodyText1>
                    I'm a member of several bands in Auckland and have experience recording music for platforms such as <a target="_blank" style={{color:'#D0A757', textDecoration:'underline'}} href="https://open.spotify.com/artist/77beRITmkfiAxZ4nA6m6o8?si=dIxxKAAwR_arU6HCvJI89A">Spotify</a>, and performing at various live venues. I enjoy staying active, and bouldering and Muay Thai help me push myself both physically and mentally. If you have shared interests, I'd love to have a chat with you!
                </BodyText1>
            </TextBox>
            <div></div>
        </GridWrapper>
    )
}
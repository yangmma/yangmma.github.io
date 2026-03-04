import React from 'react';
import styled from 'styled-components';
import Boulder from '../assets/Group 22.svg';

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    margin-left: 10rem;
    margin-right: 10rem;
    min-height: 100vh;
    box-sizing: border-box;

    @media (max-width: 900px) {
        grid-template-columns: 1fr; 
        text-align: center;
        margin: 4rem;
        min-height: 0px;
    }

    @media (max-width: 500px) {
        margin: 4rem 0.5em 4rem 0.5rem;
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
    width: 100%;
    max-width: 700px;
    height: auto;
    transform: rotate(180deg);
`;

export default function HobbiesBox() {
    return (
        <GridWrapper>
            <BoulderImg src={Boulder} alt="Boulder" />
            <TextBox>
                <HeaderText> My hobbies include <ColourText>bouldering, drumming, and Muay Thai.</ColourText></HeaderText>
                <BodyText1>
                    I'm a member of several bands in Auckland and have experience recording music for platforms such as <a target="_blank" style={{color:'#D0A757', textDecoration:'underline'}} href="https://open.spotify.com/artist/77beRITmkfiAxZ4nA6m6o8?si=dIxxKAAwR_arU6HCvJI89A">Spotify</a>, and performing at various live venues. I enjoy staying active, and bouldering and Muay Thai help me push myself both physically and mentally. If you have shared interests, I'd love to have a chat with you!
                </BodyText1>
            </TextBox>
        </GridWrapper>
    )
}
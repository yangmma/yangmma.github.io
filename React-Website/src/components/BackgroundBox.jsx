import React from 'react';
import styled from 'styled-components';
import Boulder from '../assets/Group 23.svg';

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    margin-left: 10rem;
    margin-right: 10rem;

    min-height: 100vh;
    box-sizing: border-box;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;  /* stack on smaller screens */
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
    color: #A4C5A5;
`;

const BoulderImg = styled.img`
    width: 90%;
    max-width: 400px;
    height: auto;
`;

export default function BackgroundBox() {
    return (
        <GridWrapper>
            <TextBox>
                <HeaderText>I studied at the <ColourText>University of Auckland.</ColourText></HeaderText>
                <BodyText1>
                    Although I'm originally from Hong Kong, I'm going to be continuing my studies and pursuing my Master's in New Zealand. In the mean time, I've been interning, working on passion projects, and learning new skills.
                </BodyText1>
            </TextBox>
            <BoulderImg src={Boulder} alt="Boulder" />
        </GridWrapper>
    )
}
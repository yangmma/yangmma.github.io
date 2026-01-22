import React from 'react';
import styled from 'styled-components';
import Boulder from '../assets/Group 23.svg';
import HoverSpotlightButton from './widgets/HoverSpotlightButton';

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 0.1fr 0.6fr 0.2fr 0.1fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    padding: 3rem;

    min-height: 100vh;
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
    color: #A4C5A5;
    text-decoration: underline;
`;

const BoulderImg = styled.img`
    width: 90%;
    left: 1rem;
    max-width: 400px;
    height: auto;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    @media (max-width:768px) {
        justify-content: center;
    }
`;

export default function ContactBox() {
    return (
        <GridWrapper>
            <div></div>
            <TextBox>
                <HeaderText>Interested in collaborating? Feel free to reach out to me!</HeaderText>
                <BodyText1>
                    You can email me via <a href="mailto:yangmma03@gmail.com"><ColourText>yangmma03@gmail.com</ColourText></a>, or take a look at the following:
                </BodyText1>
                <ButtonsContainer>
                    <HoverSpotlightButton href="https://www.linkedin.com/in/mma-yang/" color="#A4C5A5">LinkedIn</HoverSpotlightButton>
                    <HoverSpotlightButton href="https://github.com/yangmma" color="#A4C5A5">GitHub</HoverSpotlightButton>
                </ButtonsContainer>

            </TextBox>
            <BoulderImg src={Boulder} alt="Boulder" />
            <div></div>
        </GridWrapper>
    )
}
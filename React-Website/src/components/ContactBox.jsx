import React from 'react';
import styled from 'styled-components';
import Profile from '/images/ProfilePhoto.png';
import HoverSpotlightButton from './widgets/HoverSpotlightButton';

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
    color: #A4C5A5;
    text-decoration: underline;
`;

const ProfileImg = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border: 5px solid #A4C5A5;
    border-radius: 250px;

    @media (max-width: 500px) {
        width: 80%;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    @media (max-width:900px) {
        justify-content: center;
    }
`;

export default function ContactBox() {
    return (
        <GridWrapper>
            <TextBox>
                <HeaderText>Interested in collaborating? Feel free to reach out to me!</HeaderText>
                <BodyText1>
                    You can email me via <a href="mailto:yangmma03@gmail.com"><ColourText>yangmma03 [at] gmail [.] com</ColourText></a>, or take a look at the following:
                </BodyText1>
                <ButtonsContainer>
                    <HoverSpotlightButton href="https://www.linkedin.com/in/mma-yang/" color="#A4C5A5">LinkedIn</HoverSpotlightButton>
                    <HoverSpotlightButton href="https://github.com/yangmma" color="#A4C5A5">GitHub</HoverSpotlightButton>
                </ButtonsContainer>
            </TextBox>
            <ProfileImg src={Profile} alt="Profile Photo" />
        </GridWrapper>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Boulder from '../assets/Group 24.svg';

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
    color: #CFA5C7;
`;

const BoulderImg = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    @media (max-width: 500px) {
        transform: translateY(60px);
    }
`;

export default function PassionBox() {
    return (
        <GridWrapper>
            <BoulderImg src={Boulder} alt="Boulder" />
            <TextBox>
                <HeaderText>Take a look at some of my <Link to="/experience" style={{ color: '#CFA5C7', textDecoration: 'underline' }}>work and passion projects.</Link></HeaderText>
                <BodyText1>
                    I love to design and create things! I'm always curious about learning new skills and technologies, and deeply enjoy working with and for other people. If you want to see examples of my work, you can take a look at the experiences tab on this website.
                </BodyText1>
            </TextBox>
        </GridWrapper>
    )
}
import React from "react";
import styled from "styled-components";
import CV from "../assets/Maxine Yang CV 2026-1.pdf";


const IntroContainer = styled.div`
    display: grid;
    width: 75vw;
    max-width: 810px;
    grid-template-columns: 1fr 1fr 15rem;
    grid-template-rows: 1fr 1fr;
    @media (max-width: 1110px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const Header = styled.div`
    grid-column: 1 / 4;
    grid-row: 1;
    align-self: end;
    margin: 0;
    @media (max-width: 1110px) {
        grid-row: 1;
    }
`;

const HeaderText = styled.h2`
    margin-bottom: 0;
    font-family: 'Inter', sans-serif; 
    font-size: 3rem;
    font-weight: bold;
    color: #413C58;
`;

const Unbolded = styled.span`
    font-weight: 100;
`;

const Bolded = styled.span`
    font-weight: 600;
`

const Body = styled.div`
    grid-row: 2;
    grid-column: 1 / 3;
    @media (max-width: 1110px) {
        grid-column: 1;
        grid-row: 2;
    }
`;

const ButtonHolder = styled.div`
    grid-row: 2;
    grid-column: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1110px) {
        grid-column: 1;
        grid-row: 3;
    }
`;

const Button = styled.a`
    border: 5px solid #413C58;
    color: #413C58;
    background-color: transparent;
    font-size: 1.5rem;
    border-radius: 20px;
    padding: 0.5rem 3rem 0.5rem 3rem;


    &:hover{
        background-color: #413C58;
        color: #F4EBDC;
        border: 5px solid #413C58;
    }
`;

const BodyText = styled.p`
    color: #413C58;
`;

export default function Introduction ( ) {
    return (
        <IntroContainer>
            <Header>
                <HeaderText>Kia ora! My name is <Unbolded>Maxine Yang.</Unbolded></HeaderText>
            </Header>
            <Body>
                <BodyText>I am a Computer Science MSc Student with a BSc(Hons) in Computer Science and a BSc in Psychology at the <Bolded>University of Auckland, New Zealand.</Bolded></BodyText>
            </Body>
            <ButtonHolder>
                <Button href={CV} target="_blank" rel="noopener noreferrer"><Bolded>My CV</Bolded></Button>
            </ButtonHolder>
        </IntroContainer>
    )
}
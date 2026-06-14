import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
    display: grid;
    width: 75vw;
    max-width: 850px;
    grid-template-columns: 1fr 1fr 15rem;
    grid-template-rows: 1fr 1fr;
`;

const Header = styled.div`
    grid-column: 1 / 4;
    grid-row: 1;
    align-self: end;
    margin: 0;
`;

const HeaderText = styled.h1`
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
`;

const ButtonHolder = styled.div`
    grid-row: 2;
    grid-column: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
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
                <BodyText>I am a Computer Science MSc Student with a BSc in CS & Psychology at the <Bolded>University of Auckland, New Zealand.</Bolded></BodyText>
            </Body>
            <ButtonHolder>
                <Button><Bolded>My CV</Bolded></Button>
            </ButtonHolder>
        </IntroContainer>
    )
}
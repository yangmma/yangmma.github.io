import React from "react";
import styled from "styled-components";

import PageLayout from "../components/PageLayout";
import Profile from "../assets/ProfilePhoto(2).png"

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto;
    margin: 0;
    gap: 2rem;
`;

const LeadingText = styled.h2`
    font-size: 3rem;
    grid-row: 1;
    grid-column: 1;
    font-weight: 400;
`;

const Bolded = styled.span`
    font-weight: 700;
`;

const BodyText = styled.p`
    grid-row: 2;
    grid-column: 1 / span 2;
    white-space: pre-line;
    margin: 0;
`;  

const ProfilePhoto = styled.img`
    grid-row: 1;
    grid-column: 2;
`


export default function Page2() {

    const text = "I take a human-centered approach to my software engineering and research projects, which is informed heavily by my background in Psychology and Human Computer Interaction. I do my best to carefully understand the behaviours, desires, and frustrations of the people I work with, and to accommodate these needs into my work. \n\nI am comfortable working with Python (including machine learning and statistics libraries such as PyTorch), React, TailwindCSS, MongoDB, PostgreSQL, Figma, and Express / Node.js.";

    return (
        <div>
            <PageLayout>About</PageLayout>
            <AboutContainer>
                <LeadingText>My goal is to design and build products that are <Bolded>accessible</Bolded> and <Bolded>useful</Bolded> to those that need them. </LeadingText>
                <BodyText>{text}</BodyText>
                <ProfilePhoto src={Profile} alt="My profile photo."/>
            </AboutContainer>
        </div>
        
    );
}
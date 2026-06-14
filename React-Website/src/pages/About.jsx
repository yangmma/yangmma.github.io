import React from "react";
import styled from "styled-components";

import PageLayout from "../components/PageLayout";
import Profile from "../assets/ProfilePhoto(2).png"

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    margin: 0;
    gap: 2rem;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const LeadingText = styled.h2`
    font-size: 3rem;
    grid-row: 1;
    grid-column: 1;
    font-weight: 400;
    margin: 2rem 0 0 0;

    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }
`;

const Bolded = styled.span`
    font-weight: 700;
`;

const BodyText = styled.p`
    white-space: pre-line;
    margin: 0;
`;  

const BodyText1 = styled(BodyText)`
    grid-row: 2;
    grid-column: 1;
    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }
`

const BodyText2 = styled(BodyText)`
    grid-row: 3;
    grid-column: 1 / span 2;
    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }
`

const BodyText3 = styled(BodyText)`
    grid-row: 4;
    grid-column: 1 / span 2;
    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }
`

const ProfilePhoto = styled.img`
    grid-row: 1 / span 2;
    grid-column: 2;
    height: 40vh;
    justify-self: center;
    align-self: center;

    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
        padding-top: 2rem;
    }
  `;


export default function Page2() {

    return (
        <div>
            <PageLayout>About</PageLayout>
            <AboutContainer>
                <ProfilePhoto src={Profile} alt="My profile photo."/>
                <LeadingText>My goal is to design and build products that are <Bolded>accessible</Bolded> and <Bolded>useful</Bolded> to those that need them. </LeadingText>
                <BodyText1>I take a human-centered approach to my software engineering and research projects, which is informed heavily by my background in Psychology and Human Computer Interaction. I do my best to carefully understand the behaviours, desires, and frustrations of the people I work with, and to accommodate these needs into my work. </BodyText1>
                <BodyText2>I am comfortable working with <Bolded>Python</Bolded> (including machine learning and statistics libraries such as <Bolded>PyTorch</Bolded>), <Bolded>React, TailwindCSS, MongoDB, PostgreSQL, Figma,</Bolded> and <Bolded>Express / Node.js.</Bolded></BodyText2>
                <BodyText3>Outside of work and studies, I am a gig musician, martial artist, and rock climber. I like to seek out challenging activities and enjoy working with and meeting new people. </BodyText3>
            </AboutContainer>
        </div>
        
    );
}
import React from "react";
import styled from "styled-components";
import HoverSpotlightButton  from "../components/widgets/HoverSpotlightButton";

/* Need to do the following:

1. Create a card that can hold:
    a. An image of the project
    b. A brief description
    c. Up to 3 links
    d. A list of tools used (up to 10)
2. Ensure that the card can tilt
3. Ensure that the card maintains constant size

*/

const CardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1.5fr 1fr 0.5fr;
    grid-template-areas:
        ". ."
        "widgets body"
        ". .";

    width: clamp( 300px, 38vw, 750px);
    aspect-ratio: 6/8;
    background: #E9E9E9;
    border-radius: 10px; 
    align-items: center;
    margin: 4rem 4rem 4rem 10rem;

    @media (max-width: 1100px) {
        aspect-ratio: unset;
        height: clamp(580px, 40vh, 750px);
        grid-template-columns: repeat(auto-fit, minmax(0,1fr)); 
        grid-template-rows: auto auto;
        grid-template-areas:
            "body"
            "widgets";
        text-align: center;
        margin: 4rem;
        gap: 0;
    }
`;

const HeaderSection = styled.div`
    position: absolute;
    left: 45%;
    top: 55%;
    word-break: break-all;
    margin: 5rem;

    @media (max-width: 1700px) {
        left: 50%;
        top: 30%;
    }

    @media (max-width: 1100px) {
        left: 50%;
        top: 95%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
    font-weight: bold;
    font-size: clamp(50px, 8vw, 126px);
`;

const BodySection = styled.p`
    font-family: 'Inter', sans-serif; 
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    font-weight: normal;
    padding: 2rem 3rem 0rem 2rem;
    grid-area: body;
    @media (max-width: 1100px) {
        margin: 0;
        padding: 2rem;
    }
`;

const WidgetsSection = styled.div`
    grid-area: widgets;
    margin: 2rem 1rem;
    @media (max-width: 1100px) {
        margin: 0;
    }
`;

const ToolContainer = styled.button`
    font-family: 'Inter', sans-serif; 
    font-weight: normal;
    font-size: 14px;
    border: solid 2px #6456A1;
    border-radius: 10px;
    background: transparent;
    margin: 0.3rem;
    pointer-events: none;

    &:hover{
        pointer-events: none;
    }
`;

const ProjectPhoto = styled.img`
    position: absolute;
    left: 33%;
    top: 10%;
    width: clamp(400px, 35vw, 1000px);
    height: auto;
    border-radius: 10px;

    @media (max-width: 1800px) {
        width: 35vw;
        left: 45%
    }

    @media (max-width: 1400px) {
        left: 50%
    }

    @media (max-width: 1100px) {
        display: none;
    }
`;

const ButtonHolder = styled.div`
    position: absolute;
    left: 50%;
    top: 40%;
    border: solid 2px red;
`;


export default function ProjectCard ( { data } ) {
    const listItems = data.tools.map(tool => 
        <ToolContainer>{tool}</ToolContainer>
    );
    return (
        <>
            <CardLayout>
                <WidgetsSection>
                    {listItems}
                </WidgetsSection>
                <BodySection>
                    {data.description}
                </BodySection>
            </CardLayout>
            <ProjectPhoto src={data.image}/>
            <HeaderSection>
                    <HeaderText>{data.title}</HeaderText>
            </HeaderSection>
            <ButtonHolder>
                <HoverSpotlightButton>Link</HoverSpotlightButton>
            </ButtonHolder>
        </>
    )


}
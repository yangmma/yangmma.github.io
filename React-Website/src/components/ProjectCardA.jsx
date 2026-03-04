
import React from "react";
import Tilt from 'react-parallax-tilt'
import styled from "styled-components";
import HoverSpotlightButton  from "../components/widgets/HoverSpotlightButton";

const ProjectHolder = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    margin-top: 3rem;
    max-width: 100vw;

    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`

const CardLayout = styled.div`
    background: #E9E9E9;
    border-radius: 10px; 
    padding: 2rem;
    position: relative;
    z-index: 2;
    max-height: 700px;
    overflow-y: auto;

    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        ". ."
        "widgets body"
        ". .";
    align-items: center;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-row: 2;
        grid-template-areas:
            "widgets"
            "body"
            ".";
    }
    
    @media (max-width: 500px) {
        padding: 1rem;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr;
    }
`;

const RightColumn = styled.div`
    position: relative;
`;

const ProjectPhoto = styled.img`
    border-radius: 10px;
    width: 100%;
    position: relative;
    transform: translate(-60px, 40px);
    z-index: 3;

    @media (max-width: 1100px) {
        transform: translate(0);
    }
`;

const ButtonHolder = styled.div`
    margin: 1.5rem;
    transform: translateY(-20px);
    @media (max-width: 1100px) {
        margin: none; 
        transform: translate(0);
    }
`;

const HeaderSection = styled.div`
    overflow-wrap: anywhere;
    padding-left: 1rem;

    @media (max-width: 1100px) {
        padding: 0;
    }
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
    font-weight: bold;
    font-size: clamp(2rem, 8vw, 126px);
`;

const BodySection = styled.p`
    font-family: 'Inter', sans-serif; 
    font-size: clamp(16px, 2.5vw, 1.5rem);
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

    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        margin: 1rem;
    }

    @media (max-width: 1100px) {
        justify-content: center;
    }
`;

const ToolContainer = styled.button`
    font-family: 'Inter', sans-serif; 
    font-weight: normal;
    font-size: 14px;
    border-radius: 10px;
    background: rgba(0,0,0, 0.1);
    margin: 0.3rem;
    pointer-events: none;

    &:hover{
        pointer-events: none;
    }
`;



export default function ProjectCardA ( { data } ) {
    const listItems = data.tools.map(tool => 
        <ToolContainer key={tool}>{tool}</ToolContainer>
    );
    return (
        <>
            <ProjectHolder>
                <CardLayout>
                    <WidgetsSection>
                        {listItems}
                    </WidgetsSection>
                    <BodySection>
                        {data.description}
                    </BodySection>
                </CardLayout>
                <RightColumn>
                    <Tilt style={{ zIndex: "4", position: "relative" }}><ProjectPhoto src={data.image}/></Tilt>
                    <HeaderSection>
                            <HeaderText>{data.title}</HeaderText>
                    </HeaderSection>
                    {data?.links?.length > 0 && (
                        <ButtonHolder>
                            {data.links?.map((item, index) => {
                                const [label, url] = Object.entries(item)[0];
                                return (
                                    <HoverSpotlightButton key={index} href={url} target="_blank">{label}</HoverSpotlightButton>
                                );
                            })}
                        </ButtonHolder>
                    )}
                </RightColumn>
            </ProjectHolder>
        </>
    )


}
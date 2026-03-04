import React from "react";
import Tilt from 'react-parallax-tilt';
import styled from "styled-components";
import HoverSpotlightButton  from "../components/widgets/HoverSpotlightButton";


const ProjectHolder = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    margin-top: 4rem;
    max-width: 100vw;
    gap: 1rem;

    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto auto auto;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
    }
`


const CardLayout = styled.div`
    grid-column: 2;
    grid-row: 1 / span 2;
    background: #E9E9E9;
    border-radius: 10px; 
    padding: 2rem;
    position: relative;
    z-index: 5;
    max-height: 700px;
    overflow-y: auto;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        ". ."
        "body widgets"
        ". .";
    align-items: center;

    @media (max-width: 1100px) {
        grid-column: 1;
        grid-row: 4;
        transform: none;
        
        grid-template-columns: 1fr;
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

const TiltWrapper = styled(Tilt) `
    grid-column: 1;
    grid-row: 1;
    z-index: 4;
    position: relative;
    
`

const ProjectPhoto = styled.img`
    outline: 1px solid black;
    border-radius: 10px;
    width: 120%;
    position: relative;
    z-index: 0;
    transform: translateY(-100px);

    @media (max-width: 1100px) {
        transform: none;
        width: 100%;
        grid-row: 1;
    }
`;

const ButtonHolder = styled.div`
    grid-row: 3;
    grid-column: 1;
    margin: 1.5rem;
    z-index: 10;
    margin-top: -180px;
    @media (max-width: 1100px) {
        transform: none;
        width: 100%;
        grid-row: 3;
        margin: 0;
    }
`

const HeaderSection = styled.div`
    grid-column: 1;
    grid-row: 2;
    overflow-wrap: anywhere;
    padding-left: 1rem;
    z-index: 10;
    position: relative;
    transform: translateY(-150px);

    @media (min-width: 1660px) {
        padding: 0;
        grid-column: 1 / 3;
    }

    @media (max-width: 1100px) {
        transform: none;
        width: 100%;
        grid-row: 2;
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

    @media (max-width: 11000px) {
        justify-content: center;
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


export default function ProjectCardB ( {data} ) {
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
                <TiltWrapper><ProjectPhoto src={data.image}/></TiltWrapper>
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
            </ProjectHolder>
        </>
    )
}
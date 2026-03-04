import React from "react"
import styled from 'styled-components';
import Boulder1 from '../assets/Group 21.svg';
import RotatingText from "./widgets/RotatingText.jsx";
import HoverSpotlightButton from "./widgets/HoverSpotlightButton.jsx";


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

const BoulderImg = styled.img`
    width: 90%;
    max-width: 400px;
    height: auto;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    item-align: center;
    width: 100%;
    position: relative;
    z-index: 1;
`;

const BodyText1 = styled.p`
    font-family: 'Inter', sans-serif; 
    font-size: clamp(0.5rem, 3vw, 2rem);
    margin-bottom: 0;
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
`;

const ColourText = styled.span`
    color: #68A4D4;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media (max-width:900px) {
        justify-content: center;
    }
`;

const RotatingTextContainer = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: clamp(0.5rem, 3vw, 2rem);
    margin-top: 0;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 20px;
`;


export default function AboutBox() {
    return (
        <GridWrapper>
            <BoulderImg src={Boulder1} alt="Boulder" />
            <TextBox style={{display:'flex'}}>
                <HeaderText>Kia ora! My name is <ColourText>Maxine Yang.</ColourText></HeaderText>
                <BodyText1>
                    I’m a BSc(Hons) Computer Science graduate with a BSc in Psychology. 
                    I am particularly interested in
                </BodyText1>
                <RotatingTextContainer>
                    <ColourText>
                        <RotatingText
                            texts={[
                                'full-stack software development.',
                                'AI and machine learning.',
                                'human-computer interaction.',
                                'UX/UI design.'
                            ]}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            staggerFrom={"first"}
                            staggerDuration={0.05}
                            rotationInterval={4000}
                            />
                    </ColourText>
                </RotatingTextContainer>
                <ButtonsContainer>
                    <HoverSpotlightButton href="/Maxine_Yang_Resume_2026.pdf">Resume</HoverSpotlightButton>
                </ButtonsContainer>
            </TextBox>
        </GridWrapper>
    )
}
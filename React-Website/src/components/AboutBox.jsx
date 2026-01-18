import React from "react"
import styled from 'styled-components';
import Boulder1 from '../assets/Group 21.svg';
import RotatingText from "./widgets/RotatingText.jsx";
import HoverSpotlightButton from "./widgets/HoverSpotlightButton.jsx";


const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 0.1fr 0.2fr 0.6fr 0.1fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    padding: 3rem;

    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;  /* stack on smaller screens */
        text-align: center;
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
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
`;

const ColourText = styled.span`
    color: #68A4D4;
`;


export default function AboutBox() {
    return (
        <GridWrapper>
            <div></div>
            <BoulderImg src={Boulder1} alt="Boulder" />
            <TextBox style={{display:'flex'}}>
                <HeaderText>Kia ora! My name is <ColourText>Maxine Yang.</ColourText></HeaderText>
                <BodyText1>
                    I’m a BSc(Hons) Computer Science graduate with a BSc in Psychology. I am particularly interested in <ColourText>{' '}
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
                </BodyText1>
                <HoverSpotlightButton href="/Maxine_Yang_Resume_2026.pdf">Resume</HoverSpotlightButton>
            </TextBox>
            <div></div>
        </GridWrapper>
    )
}
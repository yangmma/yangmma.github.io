import React from "react"
import styled from 'styled-components';
import Boulder1 from '../assets/Group 21.svg';
import RotatingText from '../components/RotatingText.jsx'


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
    width: 100%;
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

// NOTE: There is a text clipping issue (responsiveness) that needs to be fixed.
const CVButton = styled.a` 
    font-family: 'Inter', sans-serif;
    font-size: clamp(0.5rem, 3vw, 2rem);    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1vmin;
    border: 5px solid #68A4D4;
    background-color: white;
    color: #68A4D4;
    width: 10vw;
    border-radius: 15px;

    &:hover {
        background-color: #68a3d457;
        color: #68A4D4;
        border: 5px solid #68A4D4;
        cursor: pointer;
    }
`;


export default function AboutBox() {
    return (
        <GridWrapper>
            <div></div>
            <BoulderImg src={Boulder1} alt="Boulder" />
            <TextBox>
                <HeaderText>Kia ora! My name is <ColourText>Maxine Yang.</ColourText></HeaderText>
                <BodyText1>
                    I’m a BSc(Hons) Computer Science Graduate with a BSc in Psychology. I am particularly interested in <ColourText>{' '}
                    <RotatingText
                        texts={[
                            'full-stack software development.',
                            'AI and machine learning.',
                            'web applications.',
                            'UX/UI design.'
                        ]}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        staggerFrom={"first"}
                        staggerDuration={0.05}
                        rotationInterval={4000}
                        />
                    </ColourText>
                </BodyText1>
            <CVButton href="/Maxine_Yang_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">Resume</CVButton>
            </TextBox>
            <div></div>
        </GridWrapper>
    )
}
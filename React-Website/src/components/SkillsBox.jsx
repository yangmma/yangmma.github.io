import React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Boulder1 from '../assets/Group 25.svg';
import Boulder1Active from '../assets/Group 25(1).svg';
import Boulder2 from '../assets/Group 28.svg';
import Boulder2Active from '../assets/Group 28(1).svg';
import Boulder3 from '../assets/Group 26.svg';
import Boulder3Active from '../assets/Group 26(1).svg';
import Boulder4 from '../assets/Group 27.svg';
import Boulder4Active from '../assets/Group 27(1).svg';

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 0.1fr 0.6fr 0.2fr 0.1fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    padding: 3rem;

    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        justify-content: center;
        gap: 0rem;
        padding: 1.5rem;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    color: #6456A1;
`;

const scaleAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    7.5% {
        transform: scale(1.1);
    }
    15% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
`;

const BoulderWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    transition: transform 0.3 ease;
    width: auto;

    &:hover {
        transform: scale(1.1);
    }
`;

const BoulderWrapperWeb = styled(BoulderWrapper)`
    height: clamp(80px, 25vh, 600px);
`;

const BoulderWrapperAI = styled(BoulderWrapper)`
    height: clamp(60px, 10vh, 500px);
`;

const BoulderWrapperProd = styled(BoulderWrapper)`
    height: clamp(80px, 25vh, 600px);
`;

const BoulderWrapperSoft = styled(BoulderWrapper)`
    height: clamp(80px, 12vh, 600px);
`;

const BoulderContainer = styled.div`
    position: relative;
    width: 100%;
    height: clamp(100px, 100vh, 700px);
    margin-right: clamp(120px, 3vw, 400px);
    margin-left: clamp(120px, 3vw, 400px);

    @media (max-width: 768px) {
        height: 500px;
        margin: 0 auto;
        width: 100%;
    }
`;

const BoulderImg = styled.img`
    cursor: pointer;
    transition: transform 0.25s ease, filter 0.25s ease;
    animation: ${scaleAnimation} 10s ease-in-out infinite;
    width: auto;
    height: 100%;

    &:hover {
        filter: drop-shadow(0 12px 20px rgba(100, 86, 161, 0.45));
    }
    
`;

const B1 = styled(BoulderImg)`
    animation-delay: 0s;
`;

const B2 = styled(BoulderImg)`
    animation-delay: 2.5s;
`;

const B3 = styled(BoulderImg)`
    animation-delay: 5s;
`;

const B4 = styled(BoulderImg)`
    animation-delay: 7.5s;
`;


export default function SkillsBox() {
    const [activeSkill, setActiveSkill] = useState("web");

    const skillLabels = {
        web: { 
            skill: "web development.", 
            body: [
                "MERN (MongoDB, Express.js, React.js, Node.js), Flask",
                "Figma (UX / UI Prototyping), Git",
                "PostgreSQL, MySQL, SQLAlchemy"
            ],
            img: {
                inactive: Boulder1,
                active: Boulder1Active
            },
        },
        AI: {
            skill: "AI/ML and data analytics.",
            body: [
                "Pytorch, pandas, NumPy, Jupyter (Python)",
                "RStudio / R",
                "Microsoft Excel"
            ],
            img: {
                inactive: Boulder2,
                active: Boulder2Active
            },
        },
        prod: {
            skill: "product management.",
            body: [
                "Experience in Agile Development",
                "Azure DevOps & Agile Software",
                "Microsoft Office Suite"
            ],
            img: {
                inactive: Boulder3,
                active: Boulder3Active
            },
        },
        soft: {
            skill: "soft skills.",
            body: [
                "Eagerness to learn new skills",
                "Teamwork, communication, conflict resolution",
                "Problem solving"
            ],
            img: {
                inactive: Boulder4,
                active: Boulder4Active
            },
        }
    }
    
    const getImgSrc = (key) => 
        activeSkill === key ? skillLabels[key].img.active : skillLabels[key].img.inactive;

    return (
        <GridWrapper>
            <div></div>
            <TextBox>
                <HeaderText>Some of my key skills include {" "}
                    <ColourText>
                        {skillLabels[activeSkill].skill}
                    </ColourText>
                </HeaderText>
                <BodyText1 style={{textAlign:'left'}}>
                    {skillLabels[activeSkill].body.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </BodyText1>
            </TextBox>
            <BoulderContainer >
                <BoulderWrapperWeb
                    onClick={() => setActiveSkill("web")}
                    style={{
                        left: 'clamp(150px, 10vw, 400px)',
                        top: '0%'
                    }}
                >
                    <B1 
                        src={getImgSrc("web")} 
                        alt="Boulder" 
                        $active={activeSkill === "web"} 
                        
                    />
                </BoulderWrapperWeb>

                <BoulderWrapperAI
                    onClick={() => setActiveSkill("AI")}
                    style={{
                        top:'clamp(100px, 20%, 150px)',
                        left: 'clamp(50px, 5vw, 100px)',
                    }}
                >
                    <B2 
                        src={getImgSrc("AI")} 
                        alt="Boulder" 
                        $active={activeSkill === "AI"} 
                    />
                </BoulderWrapperAI>

                <BoulderWrapperProd
                    onClick={() => setActiveSkill("prod")}
                    style={{
                        top: 'clamp(100px, 35%, 220px)',
                        left: '1vw'
                    }}
                >
                    <B3 
                        src={getImgSrc("prod")} 
                        alt="Boulder" 
                        $active={activeSkill === "prod"} 
                    />
                </BoulderWrapperProd>
                
                <BoulderWrapperSoft
                    onClick={() => setActiveSkill("soft")}
                    style={{
                        top: 'clamp(150px, 80%, 500px)',
                        left: 'clamp(180px, 10vw, 400px)'
                    }}
                >
                    <B4 
                        src={getImgSrc("soft")} 
                        alt="Boulder" 
                        $active={activeSkill === "soft"} 
                    />
                </BoulderWrapperSoft>
                
            </BoulderContainer>
            <div></div>
        </GridWrapper>
    )
}
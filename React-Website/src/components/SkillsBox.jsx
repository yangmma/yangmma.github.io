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
    grid-template-columns: 0.6fr 0.4fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    margin-left: 10rem;
    margin-right: 10rem;

    min-height: 100vh;
    box-sizing: border-box;

    @media (max-width: 900px) {
        gap: 0.5rem;
        grid-template-columns: 1fr;
        text-align: center;
        justify-content: center;
        margin: 4rem;
    }

    @media (max-width: 500px) {
        margin: 4rem 0.5em 4rem 0.5rem;
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
    padding-left: 2rem;
    padding-right: 2rem;
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
    position: relative;
    display: flex;
    cursor: pointer;
    transition: transform 0.3 ease;
    @media (max-width: 500px) {
        margin: 4rem 0.5em 4rem 0.5rem;
    }
`;

const BoulderWrapperWeb = styled(BoulderWrapper)`
    grid-row: 1;
    grid-column: 2;
    height: clamp(210px, 13vw, 500px);

`;

const BoulderWrapperAI = styled(BoulderWrapper)`
    grid-row: 1;
    grid-column: 1;
    height: clamp(80px, 5vw, 500px);
    align-self: end;
    justify-self: end;
    
`;

const BoulderWrapperProd = styled(BoulderWrapper)`
    grid-row: 2;
    grid-column: 1;
    height: clamp(210px, 12vw, 500px);
    align-self: start;
    justify-self: end;
    transform: translate(40px, -30px);

    @media (max-width: 500px) {
        transform: translate(40px, -140px)
    }
`;

const BoulderWrapperSoft = styled(BoulderWrapper)`
    grid-row: 2;
    grid-column: 2;
    height: clamp(80px, 5vw, 500px);
    align-self: end;
    justify-self: start;
    margin-left: 20%;
    transform: translateY(60px);
    @media (max-width: 500px) {
        transform: translateY(60px);
        align-self: start;
    }
`;

const BoulderContainer = styled.div`
    position: relative;
    justify-self: start;
    align-self: center;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    @media (max-width: 500px) {
        align-self: start;
        transform: translate(-20px, -80px);
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
                >
                    <B1 
                        src={getImgSrc("web")} 
                        alt="Boulder" 
                        $active={activeSkill === "web"} 
                        
                    />
                </BoulderWrapperWeb>

                <BoulderWrapperAI
                    onClick={() => setActiveSkill("AI")}
                >
                    <B2 
                        src={getImgSrc("AI")} 
                        alt="Boulder" 
                        $active={activeSkill === "AI"} 
                    />
                </BoulderWrapperAI>

                <BoulderWrapperProd
                    onClick={() => setActiveSkill("prod")}
                >
                    <B3 
                        src={getImgSrc("prod")} 
                        alt="Boulder" 
                        $active={activeSkill === "prod"} 
                    />
                </BoulderWrapperProd>
                
                <BoulderWrapperSoft
                    onClick={() => setActiveSkill("soft")}
                >
                    <B4 
                        src={getImgSrc("soft")} 
                        alt="Boulder" 
                        $active={activeSkill === "soft"} 
                    />
                </BoulderWrapperSoft>
                
            </BoulderContainer>
        </GridWrapper>
    )
}
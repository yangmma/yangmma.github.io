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
        grid-template-columns: 1fr;  /* stack on smaller screens */
        text-align: center;
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

    &:hover {
        transform: scale(1.1);
    }
`;

const BoulderImg = styled.img`
    width: auto;
    max-height: 600px;
    height: auto;
    cursor: pointer;
    transition: transform 0.25s ease, filter 0.25s ease;
    animation: ${scaleAnimation} 10s ease-in-out infinite;

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
            <div style={{position:'relative', width:'100%', height:'clamp(320px, 100vh, 700px)'}}>
                <BoulderWrapper
                    onClick={() => setActiveSkill("web")}
                    style={{
                        position: 'absolute', 
                        left: '60%',
                        bottom: '55%',
                        height: '40%'
                    }}
                >
                    <B1 
                        src={getImgSrc("web")} 
                        alt="Boulder" 
                        $active={activeSkill === "web"} 
                        
                    />
                </BoulderWrapper>

                <BoulderWrapper
                    onClick={() => setActiveSkill("AI")}
                    style={{
                        position: 'absolute', 
                        bottom:'60%',
                        left: '23%',
                        height: '16%'
                    }}
                >
                    <B2 
                        src={getImgSrc("AI")} 
                        alt="Boulder" 
                        $active={activeSkill === "AI"} 
                    />
                </BoulderWrapper>

                <BoulderWrapper
                    onClick={() => setActiveSkill("prod")}
                    style={{
                        position: 'absolute',
                        bottom: '30%',
                        left: '-10%',
                        height: '35%'
                    }}
                >
                    <B3 
                        src={getImgSrc("prod")} 
                        alt="Boulder" 
                        $active={activeSkill === "prod"} 
                    />
                </BoulderWrapper>
                
                <BoulderWrapper
                    onClick={() => setActiveSkill("soft")}
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '55%'

                    }}
                >
                    <B4 
                        src={getImgSrc("soft")} 
                        alt="Boulder" 
                        $active={activeSkill === "soft"} 
                    />
                </BoulderWrapper>
                
            </div>
            <div></div>
        </GridWrapper>
    )
}
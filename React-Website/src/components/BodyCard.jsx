import React from "react";
import styled from "styled-components";

const BodyTextCard = styled.div`
    display: grid;
    box-sizing: border-box;
    padding: 0 4vw;
    grid-template-columns: 1fr 1.5fr;
    justify-content: center;
    gap: 2rem;  
    min-height: 60vh;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    

    @media (max-width: 900px) {
        grid-template-columns: 1fr; 
        text-align: center;
        padding: 2rem;
    }
`;

const BodyText = styled.p`
    font-family: 'Inter', sans-serif; 
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    white-space: pre-line;
    margin-top: 3vh;
    margin-bottom: 3vh;
    overflow-wrap: break-word;
`;

const WorkBodyImage = styled.img`
    width: clamp(200px, 40vw, 500px);
    height: auto;
    align-self: center;
    justify-self: center;
    margin: 4rem;
`;

export default function BodyCard ( { body, image } ) {
    return (
        <>
            <BodyTextCard>
                <WorkBodyImage src={image}/>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%', minWidth: '0' }}>
                    <BodyText>{body}</BodyText>
                </div>
            </BodyTextCard>
        </>
    )
}
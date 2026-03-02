import React from "react"; 
import styled from "styled-components";

const SubheadingCard = styled.div`
    height: clamp(300px, 30vh, 500px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E9E9E9;

`;

const HeaderText2 = styled.h1`
    font-size: clamp(2rem, 8vw, 6rem);
    font-family: 'Inter', sans-serif; 
    font-weight: 500;
    margin: 0;
    margin-top: 3vh !important;
    text-align: center;
`

const HeaderText3 = styled.h1`
    font-size: clamp(2rem, 8vw, 4rem); 
    font-family: 'Inter', sans-serif; 
    font-weight: normal;
    margin: 0;
    text-align: center;

`;

const SubheaderText = styled.h2`
    font-family: 'Inter', sans-serif; 
    font-weight: normal;
    text-align: center;

`;

export default function SubtitleCard ( { heading1, heading2, heading3 } ) {
    return (
        <>
        <SubheadingCard>
            <HeaderText2>{heading1}</HeaderText2>
            <HeaderText3>{heading2}</HeaderText3>
            <SubheaderText>{heading3}</SubheaderText>
        </SubheadingCard>
        </>
    )
}
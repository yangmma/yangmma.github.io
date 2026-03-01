import React from "react";
import styled from "styled-components";

const HeadingCard = styled.div`
    height: 40vh;
    width: 100vw;
    background-color: #FCF6B1;
    top: 0;
    margin-top: ${props => props.$marginTop};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
    font-size: clamp(5rem, 8vw, 8rem);
`;

export default function TitleCard ( {children, $marginTop} ) {
    return (
        <HeadingCard $marginTop={$marginTop}>
            <HeaderText>{children}</HeaderText>
        </HeadingCard>
    )
}
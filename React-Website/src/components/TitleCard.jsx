import React from "react";
import styled from "styled-components";

const HeadingCard = styled.div`
    height: 30vh;
    width: 100vw;
    background-color: #FCF6B1;
    top: 0;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif; 
`;

export default function TitleCard ( {children} ) {
    return (
        <HeadingCard>
            <HeaderText>{children}</HeaderText>
        </HeadingCard>
    )
}
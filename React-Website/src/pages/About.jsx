import React from 'react';
import AboutBox from '../components/AboutBox';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
    0% {
    opacity: 0;
    transform: translateY(50px);
    }

    100% {
    opacity: 1;
    transform: translateY(0)
    }
`;

const AnimatedWrapper = styled.div`
    animation: ${Animation} 1s ease-out forwards;
`


export default function Page1() {
    return (
        <AnimatedWrapper>
                    <AboutBox />
        </AnimatedWrapper>
    );
}
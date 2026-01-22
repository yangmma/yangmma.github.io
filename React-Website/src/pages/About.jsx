import React from 'react';
import styled, { keyframes } from 'styled-components';
import AboutContainer from '../components/AboutContainer';

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
    animation: ${Animation} 2s ease-out forwards;
    z-index:2;
`

export default function Page1() {
    
    return (
        <AnimatedWrapper>
            <AboutContainer/>
            <div style={{ height: '200vh' }} />
        </AnimatedWrapper>
    );
}
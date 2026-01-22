import React from 'react';
import { useRef, useEffect } from 'react';
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

const ScrollWrapper = styled.div`
    height: 100vh;
    overflow-y: scroll;
    overscroll-behaviour: none;
`

const LoopContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export default function Page1() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;
        const buffer = 300;

        const handleScroll = () => {
            const halfTop = element.scrollHeight / 2;
            if (element.scrollTop > halfTop + buffer) {
                element.scrollTop -= halfTop;
            }
            if (element.scrollTop < buffer) {
                element.scrollTop += halfTop;
            }
        };

        element.addEventListener("scroll", handleScroll)
        return () => element.removeEventListener("scroll", handleScroll)
        
    }, []);

    
    return (
        <AnimatedWrapper>
            <ScrollWrapper ref={scrollRef}>
                <LoopContainer>
                    <AboutContainer/>
                    <AboutContainer/>
                    <AboutContainer/>
                    <AboutContainer/>
                </LoopContainer>
            </ScrollWrapper>
        </AnimatedWrapper>
    );
}
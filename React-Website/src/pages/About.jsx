import React from 'react';
import AboutBox from '../components/AboutBox';
import styled, { keyframes } from 'styled-components';
import GreyVolumeA from '../assets/GreyVolume.svg?react';
import YellowVolumeA from '../assets/YellowVolume.svg?react'
import { useParallax } from 'react-scroll-parallax';

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
`
const VolumeWrapper = styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: -1;
`;

const VolumeIcon1 = styled(GreyVolumeA)`
  width: 75vw;
  height: 75vh;
  position: absolute;
  top: 110vh;
  left: -10vw;
  z-index: -1;
  rotate: -27.5deg;
`;

const VolumeIcon2 = styled(YellowVolumeA)`
  width: 420vw;
  height: 250vh;
  top: -60vh;
  position: absolute;
  right: -160vw;
  z-index: -1;
  rotate: -10deg;
`;

const BackgroundWrapper = styled.div`
    position: relative;
`;

export default function Page1() {
    const parallax = useParallax({
        speed: -15,
    });

    const parallax2 = useParallax({
        speed: -20,
    });

    return (
        <AnimatedWrapper>
            <BackgroundWrapper>
                <div>
                    <AboutBox />
                </div>
                    <VolumeWrapper ref={parallax.ref}>
                        <VolumeIcon1 />
                    </VolumeWrapper>
                    <VolumeWrapper ref={parallax2.ref}>
                        <VolumeIcon2/>
                    </VolumeWrapper>
                    
            </BackgroundWrapper>
            <div style={{ height: '200vh' }} />

        </AnimatedWrapper>
    );
}
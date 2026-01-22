import React from 'react';
import AboutBox from '../components/AboutBox';
import styled, { keyframes } from 'styled-components';
import GreyVolumeA from '../assets/GreyVolume.svg?react';
import YellowVolumeA from '../assets/YellowVolume.svg?react'

import { useParallax } from 'react-scroll-parallax';

import BackgroundBox from '../components/BackgroundBox';
import PassionBox from '../components/PassionBox';
import SkillsBox from '../components/SkillsBox';
import HobbiesBox from '../components/HobbiesBox';
import ContactBox from './ContactBox';

const VolumeWrapper = styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: -1;
`;

const VolumeIcon1 = styled(GreyVolumeA)`
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 130vh;
  left: -20vw;
  z-index: -1;
  rotate: -27.5deg;
`;

const VolumeIcon2 = styled(YellowVolumeA)`
  width: 420vw;
  height: 250vh;
  top: -10vh;
  position: absolute;
  right: -160vw;
  z-index: -2;
  rotate: -10deg;
`;

const BackgroundWrapper = styled.div`
    position: relative;
    z-index:1;
`;

export default function AboutContainer() {
    const parallax = useParallax({
        speed: -20,
    });

    const parallax2 = useParallax({
        speed: -25,
    });

    return (
        <BackgroundWrapper>
            <div>
                <br/><br/>
                <AboutBox />
                <br/><br/><br/>
                <BackgroundBox />
                <br/><br/><br/>
                <PassionBox />
                <br/><br/><br/>
                <SkillsBox />
                <br/><br/><br/><br/>
                <HobbiesBox/>
                <br/><br/><br/>
                <ContactBox/>
            </div>
            <VolumeWrapper ref={parallax.ref}>
                <VolumeIcon1 />
            </VolumeWrapper>
            <VolumeWrapper ref={parallax2.ref}>
                <VolumeIcon2/>
            </VolumeWrapper>
        </BackgroundWrapper>
    )
}
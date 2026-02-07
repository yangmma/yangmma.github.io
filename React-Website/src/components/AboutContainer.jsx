import React from 'react';
import AboutBox from '../components/AboutBox';
import styled from 'styled-components';
import GreyVolumeA from '../assets/GreyVolume.svg?react';
import GreyVolumeB from '../assets/GreyVolume2.svg?react';
import GreyVolumeC from '../assets/GreyVolume3.svg?react';
import YellowVolumeA from '../assets/YellowVolume.svg?react';
import YellowVolumeB from '../assets/YellowVolume2.svg?react';
import YellowVolumeC from '../assets/YellowVolume3.svg?react';

import { useParallax } from 'react-scroll-parallax';

import BackgroundBox from '../components/BackgroundBox';
import PassionBox from '../components/PassionBox';
import SkillsBox from '../components/SkillsBox';
import HobbiesBox from '../components/HobbiesBox';
import ContactBox from './ContactBox';

const VolumeWrapper = styled.div`
    position: absolute;
    inset: 0;
`;

const VolumeIcon1 = styled(GreyVolumeA)`
    width: 90vw;
    height: 90vh;
    position: absolute;
    top: 130vh;
    left: -20vw;
    rotate: -27.5deg;
    will-change: transform
`;

const VolumeIcon2 = styled(YellowVolumeA)`
    width: 420vw;
    height: 250vh;
    top: -10vh;
    position: absolute;
    right: -160vw;
    rotate: -10deg;
`;

const VolumeIcon3 = styled(GreyVolumeB)`
    width: 150vw;
    height: 150vh;
    position: absolute;
    top: 305vh;
    left: 2vw;
`
const VolumeIcon4 = styled(YellowVolumeB)`
    width: 310vw;
    height: 300vh;
    position: absolute;
    top: 335vh;
    left: -90vw;
    rotate: 7deg;
`
const VolumeIcon5 = styled(GreyVolumeC)`
    width: 300vw;
    height: 200vh;
    position: absolute;
    top: 540vh;
    left: -100vw;
`
const VolumeIcon6 = styled(YellowVolumeC)`
    width: 310vw;
    height: 310vh;
    position: absolute;
    top: 530vh;
    left: -80vw;
`

const ContentWrapper = styled.div`
    position: relative;
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index:-1;
    pointer-events: none;
`;

export default function AboutContainer() {
    const parallax = useParallax({
        speed: -20,
    });

    const parallax2 = useParallax({
        speed: -25,
    });

    const parallax3 = useParallax({
        speed: -20,
    });

    const parallax4 = useParallax({
        speed: -25,
    });

    const parallax5 = useParallax({
        speed: -20,
    });

    const parallax6 = useParallax({
        speed: -25,
    });

    return (
        <ContentWrapper>
            <div>
                <br/><br/>
                <AboutBox />
                <br/><br/><br/>
                <BackgroundBox />
                <br/><br/><br/>
                <PassionBox />
                <br/><br/>
                <SkillsBox />
                <br/>
                <HobbiesBox/>
                <br/><br/>
                <ContactBox/>
                <br/><br/>
            </div>
            <BackgroundWrapper>
                <VolumeWrapper ref={parallax.ref} style={{ zIndex:1 }}>
                    <VolumeIcon1 />
                </VolumeWrapper>
                <VolumeWrapper ref={parallax2.ref} style={{ zIndex:2 }}>
                    <VolumeIcon2/>
                </VolumeWrapper>
                <VolumeWrapper ref={parallax3.ref} style={{ zIndex:1 }}>
                    <VolumeIcon3/>
                </VolumeWrapper>
                <VolumeWrapper ref={parallax4.ref} style={{ zIndex:2 }}>
                    <VolumeIcon4/>
                </VolumeWrapper>
                <VolumeWrapper ref={parallax5.ref} style={{ zIndex:2 }}>
                    <VolumeIcon5/>
                </VolumeWrapper>
                <VolumeWrapper ref={parallax6.ref} style={{ zIndex:1 }}>
                    <VolumeIcon6/>
                </VolumeWrapper>
            </BackgroundWrapper>
        </ContentWrapper>
    )
}
import React, { useRef, useEffect, useState } from 'react';
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

const LoopViewport = styled.div`
    position: fixed;
    inset: 0;
    overflow: hidden;
`

const LoopContainer = styled.div`
    will-change: transform;
    display: flex;
    flex-direction: column;
`


export default function Page1() {
  const trackRef = useRef(null);
  const [trackHeight, setTrackHeight] = useState(0);

  const items = [
    <AboutContainer key={0} />,
    <AboutContainer key={1} />,
    <AboutContainer key={2} />,
    <AboutContainer key={3} />,
  ];

  // Measure total height of all looped content
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const height = track.scrollHeight;
    setTrackHeight(height);
  }, []);

  // Handle scroll and transform
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !trackHeight) return;

    const handleScroll = () => {
      const y = window.scrollY;
      const offset = y % trackHeight;
      track.style.transform = `translate3d(0, -${offset}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackHeight]);

  return (
    <>
      {/* Scrollable spacer equals track height for a smooth scroll */}
      <div style={{ height: trackHeight || "100vh" }} />

      <LoopViewport>
        <LoopContainer ref={trackRef}>
          {items}
          {items}
        </LoopContainer>
      </LoopViewport>
    </>
  );
}
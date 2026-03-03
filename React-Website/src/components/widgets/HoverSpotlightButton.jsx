import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef } from "react";

// NOTE TO SELF: Come back and consider adding the spotlight effect to changing text colour

const LinkButton = styled(motion.a)` 
    position: relative;
    overflow: hidden;

    font-family: 'Inter', sans-serif;
    font-size: clamp(0.5rem, 3vw, 2rem);    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: clamp(25px, 1vmin, 30px);
    border: 5px solid ${({ $color }) => $color};
    background-color: transparent;
    width: 10vw;
    border-radius: 15px;
    color: ${({ $color }) => $color};


    &:hover span {
        opacity: 1;
        color: black;
    }
`;

const ButtonText = styled.span`
    pointer-events: none;
    position: relative;
    z-index: 2;
    font-size: clamp(12px, 4vmin, 30px);
`;

const Spotlight = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 80px;
    width: 80px;
    background: ${({ $color }) => `${$color}57`};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    
`;


export default function HoverSpotlightButton( { href, children, color = "#68A4D4" } ) { // Modified Spotlight button from Hover.dev

    const buttonRef = useRef(null);
    const spotlightRef = useRef(null)

    useEffect(() => {
        const button = buttonRef.current;
        const spotlight = spotlightRef.current;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            const left = `${(offsetX / rect.width) * 100}%`
            const top = `${(offsetY / rect.height) * 100}%`

            spotlight.animate(
                { left, top },
                { 
                    duration: 250,
                    fill: "forwards"
                }
            );
        }

        const handleMouseLeave = () => {
            spotlight.animate(
                { left: "50%", top: "50%"},
                { duration: 100, fill: "forwards" }
            );
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove)
            button.removeEventListener("mouseleave", handleMouseLeave)
        };
    }, []);

    return(
        <LinkButton ref={buttonRef} href={href} $color={color} target={"_blank"} whileTap={{ scale: 0.98}}>
            <ButtonText>{children}</ButtonText>
            <Spotlight ref={spotlightRef} $color={color}/>
        </LinkButton>
    )
}
import React from "react";
import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import { useState, useRef, useEffect } from "react";

import Line from "../assets/Line 5.svg";
import SelectedEvent from "../assets/Ellipse 113.svg";
import Event from "../assets/Ellipse 114.svg";

const MobileTimeline = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-top: 2rem;
    gap: 2rem;
    @media (min-width: 1260px) {
        display: none;
    }
`;

const MobileEvent = styled.div`
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
`;

const ExperienceContainer = styled.div`
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr 1fr 150px;
    column-gap: 5rem;
    margin: 2rem 0 2rem 0;

    @media (max-width: 1260px) {
        display: none;
    }
`;

const EventTitle = styled.h2`
    grid-column: 1;
    grid-row: 1;
    margin: 0;
    font-weight: 100;
    @media (max-width: 1260px) {
        font-size: 2rem;
    }
`;

const EventDescription = styled.p`
    grid-column: 1;
    grid-row: 2;
`

const MonthYear = styled.h1`
    grid-column: 3;
    grid-row: 1;
    margin: 0;
    @media (max-width: 1260px) {
        font-size: 4rem;
    }
`;

const TimelineStyle = styled.div`
    grid-column: 2;
    grid-row: 1 / 4;
    justify-self: center;
    align-self: flex-start;
    position: relative;
`;

const TimelineLine = styled.img`
    height: 52vh;
    min-height: 430px;
    width: 6px;
`;

const TimelineImage = styled.img`
    position: absolute;
    right: -22px;
    width: 50px;
    cursor: pointer;
`;

const Context = styled.p`
    grid-row: 3;
    grid-column: 1;
    font-weight: 700;

    @media (max-width: 1260px) {
    display:  none;
    }
`;


export default function Page4() {

    const [ currentInd, setCurrentInd ] = useState(0);
    const containerRef = useRef(null);
    console.log(currentInd);

    useEffect (() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY > 0) { //Scrolling down!
                setCurrentInd((prev) => (Math.min(prev + 1, timelineData.length - 1)));
            } else { // scrolling up!
                setCurrentInd((prev) => (Math.max(prev - 1, 0)));
            }
        }
        container.addEventListener("wheel", handleWheel, {passive: false});
        return () => container.removeEventListener("wheel", handleWheel);
    }, [])

    const timelineData = [
        {
            date: "NOV 2024",
            id: 1,
            title: "BSc in Computer Science & Psychology",
            text: "I graduated the University of Auckland with a Bachelor of Science degree."
        },
        {
            date:"NOV 2024",
            id: 2,
            title:"Teletrac Navman Internship",
            text: "I was hired by Teletrac Navman as part of their Software Engineering Summer Internship. During this internship I worked on developing an application for engineers to easily navigate their databases, and additionally created an automated script for sending MDM commands.",
        },
        {
            date:"NOV 2025",
            id: 3,
            title:"BSc(Hons) in Computer Science",
            text:"I acquired a postgraduate Honours degree in Computer Science, involving the creation of a research thesis which is now published and listed in this websites' Publications page.",
        },
        {
            date:"NOV 2025",
            id: 4,
            title:"Auckland Council Internship",
            text:"I was hired by Auckland Council as a Technology Services Intern, specifically working with Product Management teams to assist with change work, run work, and internal research.",
        },
        {
            date: "JUN 2026",
            id: 5,
            title:"AC Tech Services Assistant",
            text:"I am currently working for Auckland Council as a Technology Services Assistance, helping the Services Management team.",
        },
        {
            date: "FEB 2027",
            id: 6,
            title: "AC Tech Services Graduate (Expected)",
            text: "I have been accepted into the Graduate Program for Technology Services at the Council, which is a two year programme in which I will be completing various rotations.",
        },
        {
            date: "NOV 2027",
            id: 7,
            title:"MSc in Computer Science (Expected)",
            text:"I am currently in the process of pursuing a Masters’ degree in Computer Science specializing in Human Computer Interaction. I am expected to complete this degree by November 2027.",
        },
    ]

    const currentItem = timelineData[currentInd];

    return (
        <>
            <PageLayout>Experience</PageLayout>

            {/* Desktop Timeline */}
            <ExperienceContainer ref={containerRef}>
                <MonthYear>{currentItem.date}</MonthYear>
                <EventTitle>{currentItem.title}</EventTitle>
                <EventDescription>{currentItem.text}</EventDescription>
                <TimelineStyle>
                    <TimelineLine src={Line} />
                    {timelineData.map((item, index) => (
                        <TimelineImage
                            key = {item.id}
                            src = {currentInd === index ? SelectedEvent : Event}
                            alt = {item.date}
                            title = {item.date}
                            style={{
                                top: `${(index / (timelineData.length - 1)) * 92}%`,
                            }}
                            onClick={() => setCurrentInd(index)}
                        >

                        </TimelineImage>
                    ))}
                </TimelineStyle>
            </ExperienceContainer>
            <Context>Hover over the timeline and click or scroll!</Context>

            {/* Mobile Timeline */}
            <MobileTimeline>
                {timelineData.map((item) => (
                    <MobileEvent key={item.id}> 
                        <MonthYear>{item.date}</MonthYear>
                        <EventTitle>{item.title}</EventTitle>
                        <EventDescription>{item.text}</EventDescription>
                    </MobileEvent>
                ))}
            </MobileTimeline>
        </>
        
    );
}
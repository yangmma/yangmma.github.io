import React from "react";
import { useLayoutEffect } from "react";


import TitleCard from "../components/TitleCard";
import SubtitleCard from "../components/SubtitleCard";
import BodyCard from "../components/BodyCard";
import ProjectsContainer from "../components/ProjectsContainer";

const work1title = "Auckland Council"
const work1subtitle = "Technology Services Intern"
const work1date = "Nov. 2025 - Feb 2026"
const work1body = "Over the course of my internship at Auckland Council, I worked on three key projects within the domain of product management.\n\nMy first project was centred around UX design and the delivery of a new application on behalf of the council, where I learned how to practically apply Agile concepts and assisted with planning and change management.\n\nMy second project was data analysis of tickets for a team conducting run work, in order to quickly identify and understand the causes of common software issues.\n\nFinally, my third project was a research project on Technology Services' recent shift from traditional project management to Agile. I interviewed numerous Product Managers, Scrum Masters, and other roles to develop a report and presentation with actionable recommendations for improving the current workflow."
import Logo1 from '../assets/AKLCouncil.png';

const work2title = "Teletrac Navman"
const work2subtitle = "Software Engineering Intern"
const work2date = "Nov. 2024 - Feb 2025"
const work2body = "I was given two projects during my time at Teletrac Navman, which allowed me to learn new skills in areas I was very unfamiliar with.\n\nThe first project was a solo software engineering project developing an internal GUI application with a user-friendly UI to allow firmware engineers at the company to quickly and reliably scour their databases for specific device messages. This project involved heavy communication with my supervisor and other firmware engineers, who acted as my clients. Furthermore, at the time I was quite new to SQL and databases, so having a query-heavy project allowed me to learn quickly.\n\nMy second project was more aligned with firmware engineering, where I was asked to create an automatic script to assist with updating certain field devices depending on a set of criteria. This project taught me about message brokers (specifically RabbitMQ), and involved the use of Python, SQLAlchemy, PostgreSQL, and physical devices. "
import Logo2 from '../assets/TNLogo.png';

/* Into BodyCard, we need to pass: 1. the relevant image, 2. the text for that work*/

export default function Page2() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <>
            {/* Work Experience Section */}
            <TitleCard marginTop={'6rem'}>Work</TitleCard>
            <SubtitleCard heading1={work1title} heading2={work1subtitle} heading3={work1date}/>
            <BodyCard body={work1body} image={Logo1}/>
            <SubtitleCard heading1={work2title} heading2={work2subtitle} heading3={work2date}/>
            <BodyCard body={work2body} image={Logo2}/>

            {/* Projects Section */}
            <TitleCard marginTop={'0'}>Projects</TitleCard>
            <ProjectsContainer/>
        </>
        
    );
}
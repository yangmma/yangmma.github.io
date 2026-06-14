import React from "react";
import styled from "styled-components";

import PageLayout from "../components/PageLayout";
import { useState } from "react";
import Profile from "../assets/ProfilePhoto(2).png";
import Multiplayer from "../assets/AI Agent.png";
import Feedback from "../assets/AutomatedFeedback.png";
import Kettle from "../assets/kettle.png";
import CampusGuessr from "../assets/campussguessr.png";

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

const ProjectsList = styled.ol`
    grid-row: 1;
    grid-column: 1;

    list-style-type: lower-alpha;
    font-size: 3rem;
    list-style-position: inside;
    padding: 0;
    margin: 2rem 0 0 0;
`;

const TextBox = styled.p`
    grid-row: 1;
    grid-column: 2;
    margin: 2rem 0 0 0;
`;

const ProjectPhoto = styled.img`
    grid-row: 2;
    grid-column: 1 / span 2;
    justify-self: center;
    align-self: center;
    width: 60%;
`;

const ProjectItem = styled.li`
    font-weight: ${({ active }) => (active ? "700" : "100")};
    cursor: pointer;
`;

export default function Page3() {

    const projects = {
        multiplayer: {
            text: "For my Bachelor of Science (Honours) thesis, I had the pleasure of specialising in Human Computer Interaction and conducting a research study on interaction designs for real-time multi-player dance with a deep-learning model. This paper involved design, development, and user studies, and has since been accepted into the MOCO'26 conference in Montpellier, France. This is also listed under the 'publications' tab of this website.",
            image: Multiplayer,
        },
        campusguessr: {
            text: "In my Software Tools and Techniques class (COMPSCI 732) I led UI/UX design and frontend development for a campus navigation web application. The idea for this application was to promote the learning of campus locations through gameification by drawing inspiration from Wordle and Geoguessr. I also assisted with backend and database integration. Repository and further details can be provided on request.",
            image: CampusGuessr,
        },
        feedback: {
            text: "In my Computing Education (COMPSCI 747) course, I co-authored a research paper exploring the use of Large Language Models in providing automated feedback for variable naming in programming assignments for CS1 students.",
            image: Feedback,
        },
        kettle: {
            text: "For the 2023 End-Of-Year Terrible Ideas Hackathon, my team and I constructed the Pay-To-Win 'Amazon' Kettle. The goal of this 46-hour hackathon was to come up with and build a terrible idea. Ours was a kettle which requires you to listen to a full ad, without skipping, in order to use it.",
            image: Kettle,
        },
    }

    const [ selectedProject, setSelectedProject ] = useState('multiplayer')

    return (
        <>
            <PageLayout>Projects</PageLayout>
            <ProjectsContainer>
                <ProjectsList>
                    <ProjectItem active={selectedProject === "multiplayer"} onClick={() => setSelectedProject("multiplayer")}>
                        Multi-Player Dance w/ AI Models
                    </ProjectItem>
                    <ProjectItem active={selectedProject === "campusguessr"} onClick={() => setSelectedProject("campusguessr")}>
                        CampusGuessr
                    </ProjectItem>
                    <ProjectItem active={selectedProject === "feedback"} onClick={() => setSelectedProject("feedback")}>
                        Automated Feedback for Variable Naming
                    </ProjectItem>
                    <ProjectItem active={selectedProject === "kettle"} onClick={() => setSelectedProject("kettle")}>
                        Pay-To-Win Kettle
                    </ProjectItem>
                </ProjectsList>
                <TextBox>{projects[selectedProject].text}</TextBox>
                <ProjectPhoto src={projects[selectedProject].image}/>

            </ProjectsContainer>
        </>
        
    );
}
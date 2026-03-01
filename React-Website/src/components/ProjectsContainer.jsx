import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

/* Image Imports */
import CampusGuessr from '../assets/campussguessr.png';

const ProjContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    box-sizing: border-box;
    gap: 2rem;
    justify-content: flex-start;
    position: relative;

    @media (max-width: 1100px) {
        justify-content: center;
        text-align: center;
        width: 100%;
    }
`;

/* 
TO-DO:
1. Project details should be provided as a dictionary in order to ensure ease of adding new projects into the mix. 
2. Add a way to filter projects. (OPTIONAL) ^^ Each project should have 1 or more tags associated with it, e.g. webdev or AI
*/


const projects = [
    {
        id: 1,
        tag: "web",
        title: "CAMPUSGUESSR",
        image: CampusGuessr,
        description: "In my Software Tools and Techniques class (COMPSCI 732) I led UI/UX design and frontend development for a campus navigation web application. The idea for this application was to promote the learning of campus locations through gameification by drawing inspiration from Wordle and Geoguessr. I also assisted with backend and database integration.",
        tools: ["figma", "react", "typescript", "mongoDB", "express.js", "node.js"],
        links: {
            report: "TBC",
            live: "https://campusguessr.fly.dev/",
        }
    }
];

export default function ProjectsContainer () {
    return (
        <>
        <ProjContainer>
            {projects.map((project) => (
                <ProjectCard key={project.id} data={project} />
            ))}
        </ProjContainer>
        </>
    )
}
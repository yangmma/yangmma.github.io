import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";


const ProjContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap
    box-sizing: border-box;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 1100px) {
        justify-content: center;
        text-align: center;
        width: 100%;
        max-width: 100vw;
    }
`;

/* 
TO-DO:
1. Project details should be provided as a dictionary in order to ensure ease of adding new projects into the mix. 
2. Add a way to filter projects. (OPTIONAL) ^^ Each project should have 1 or more tags associated with it, e.g. webdev or AI
*/


export default function ProjectsContainer () {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/json_files/projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])

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
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const NavGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;

    width: 75vw;
    max-width: 1200px;
`;

const ProjectsSquare = styled(Link)`
    grid-row: 1 / span 4;
    color: #413C58;
    border: solid 4px #413C58;
    background: transparent;
    border-radius: 10px;
    font-size: 6rem;
    padding: 0 0 0.5rem 1rem;

    display: flex;
    align-items: flex-end;

    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }

    &:hover{
        background-color: #413C58;
        color: #F4EBDC;
        border-color: #413C58;
    }
`;

const ExperienceSquare = styled(Link)`
    grid-row: 1 / span 3;
    color: #413C58;
    border: solid 4px #413C58;
    background: transparent;
    border-radius: 10px;
    font-size: 4rem;
    padding: 0 0 0.5rem 1rem;

    display: flex;
    align-items: flex-end;

    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }

    &:hover{
        background-color: #1B473C;
        color: #F4EBDC;
        border-color: #413C58;
    }
`;

const PublicationsSquare = styled(Link)`
    grid-row: 5;
    color: #413C58;
    border: solid 4px #413C58;
    background: transparent;
    border-radius: 10px;
    font-size: 3rem;
    padding: 0 0 0.5rem 1rem;

    display: flex;
    align-items: flex-end;

    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }

    &:hover{
        background-color: #F9F871;
        color: #413C58;
        border-color: #413C58;
    }
`;

const AboutSquare = styled(Link)`
    grid-row: 4 / span 2;
    color: #413C58;
    border: solid 4px #413C58;
    background: transparent;
    border-radius: 10px;
    font-size: 4rem;
    padding: 0 0 0.5rem 1rem;

    display: flex;
    align-items: flex-end;

    @media (max-width: 1000px) {
        grid-row: auto;
        grid-column: 1;
    }

    &:hover{
        background-color: #B8D76A;
        color: #413C58;
        border-color: #413C58;
    }
`;

export default function Navigation () {
    return (
        <NavGrid>
            <ProjectsSquare to="/projects">Projects</ProjectsSquare>
            <ExperienceSquare to="/experience">Experience</ExperienceSquare>
            <PublicationsSquare to="/publications">Publication(s)</PublicationsSquare>
            <AboutSquare to="/about">About</AboutSquare>
        </NavGrid>
    )
}
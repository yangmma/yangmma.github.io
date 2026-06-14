import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0 0 0;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        justify-content: center;
        gap: 1rem;
    }
    `;

const StyledNavbarLink = styled(NavLink)`
    color: #413C58;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif; 

    border: 3px solid #413C58;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 14rem;

    &:hover {
        background-color: #413C58;
        color: #F4EBDC;
    }
    `;

export default function NavBar() {
    return (
            <Wrapper>
                <StyledNavbarLink to="/">Home</StyledNavbarLink>
                <StyledNavbarLink to="/about">About</StyledNavbarLink>
                <StyledNavbarLink to="/projects">Projects</StyledNavbarLink>
                <StyledNavbarLink to="/experience">Experience</StyledNavbarLink>
                <StyledNavbarLink to="/publications">Publications</StyledNavbarLink>
            </Wrapper>
    );
}

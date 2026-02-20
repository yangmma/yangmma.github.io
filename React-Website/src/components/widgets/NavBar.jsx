import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
    background-color: black;
    padding: 1.5rem 1.5rem;
    top: 0;
    align-items: center;
    position: fixed;
    justify-content: flex-end;
    z-index: 1000;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    `;

const LinksDiv = styled.div`
    display: flex;
    gap: 2rem;
    `

const StyledNavbarLink = styled(NavLink)`
    color: #AFAFAF;
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif; 
    transition: color 0.2s;

    &.active {
        color: white;
    }

    &:hover {
        color: white;
    }
    `;

export default function NavBar({}) {
    return (
            <Wrapper>
                <LinksDiv>
                    <StyledNavbarLink to="/">About</StyledNavbarLink>
                    <StyledNavbarLink to="/experience">Experience</StyledNavbarLink>
                </LinksDiv>
            </Wrapper>
    );
}

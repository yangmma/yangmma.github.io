import React, { Children } from "react";
import styled from "styled-components";

const PageHeading = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
`

const PageTitle = styled.h1`
    font-size: 6rem;
    font-weight: 600;
    margin: 0;
    color: #413C58;
`

const Line = styled.div`
    flex: 1;
    height: 4px;
    background: #413C58;
    border-radius: 10px;
    margin-left: 1rem;
`

export default function PageLayout( { children } ) {
    return (
        <>
        <PageHeading>
            <PageTitle>
                {children}
            </PageTitle>
            <Line/>
        </PageHeading>
        </>
    )
}
import React from "react";
import Tilt from 'react-parallax-tilt';
import styled from "styled-components";


const ProjectHolder = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    margin-top: 3rem;
    max-width: 100vw;
    max-height: 90vh;

    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`

export default function ProjectCardB () {
    return (
        <>
            <ProjectHolder>
                <CardLayout>
                    <WidgetsSection>
                        {listItems}
                    </WidgetsSection>
                    <BodySection>
                        {data.description}
                    </BodySection>
                </CardLayout>
                <LeftColumn>
                    <Tilt style={{ zIndex: "4", position: "relative" }}><ProjectPhoto src={data.image}/></Tilt>
                    <HeaderSection>
                            <HeaderText>{data.title}</HeaderText>
                    </HeaderSection>
                    <ButtonHolder>
                        <HoverSpotlightButton href="/files/myan565 732 Project Report.pdf">Report</HoverSpotlightButton>
                        <p>Further information can be provided upon request.</p>
                    </ButtonHolder>
                </LeftColumn>
            </ProjectHolder>
        </>
    )
}
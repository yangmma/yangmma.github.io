import React from "react";
import PageLayout from "../components/PageLayout";
import styled from "styled-components";

const PubsContainer = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (max-width: 1260px) {
        display: none;
    }
`;

const PubsList = styled.ol`
    grid-row: 1;
    grid-column: 1;

    list-style-type: lower-alpha;
    font-size: 1.2rem;
    list-style-position: inside;
    padding: 0;
    margin: 2rem 0 0 0;
`;

export default function Page5() {

    return (
        <>
            <PageLayout>Publications</PageLayout>
            <PubsContainer>
                <PubsList>
                    <li>Maxine Yang, Rebecca Weber, and Danielle Lottridge. 2026. <span style={{ fontWeight: '700' }}> Designing Generative AI for Real-Time Multi-User Interaction in Co-Creative Dance</span>. In Proceedings of the 10th International Conference on Movement and Computing (MOCO '26). Association for Computing Machinery, New York, NY, USA, Article 12, 1–11. <a style = {{textDecoration: 'underline'}} href="https://doi.org/10.1145/3802842.3802865" target="_blank">https://doi.org/10.1145/3802842.3802865</a></li>
                </PubsList>
            </PubsContainer>
        </>
        
    );
}
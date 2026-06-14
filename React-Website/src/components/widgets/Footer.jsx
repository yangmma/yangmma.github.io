import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    margin: 2rem 0 2rem 0;
    text-align: center;
`

const Bolded = styled.span`
    font-weight: 600;
`

export default function Footer () {
    return(<>
        <FooterContainer>yangmma03 [at] gmail [dot] com <Bolded>|</Bolded> /in/mma-yang/</FooterContainer>
    </>)

}
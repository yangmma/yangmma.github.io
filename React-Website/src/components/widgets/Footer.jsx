import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    margin: 2rem 0 2rem 0;
    text-align: center;
    color: #413C58;
`

const Bolded = styled.span`
    font-weight: 600;
`

export default function Footer () {
    return(<>
        <FooterContainer> <a style={{ textDecoration: "underline" }} href="mailto:yangmma03@gmail.com">yangmma03 [at] gmail [dot] com</a> <Bolded>|</Bolded> <a style={{ textDecoration: "underline" }} href="https://www.linkedin.com/in/mma-yang/" target="_blank"> /in/mma-yang/ </a> </FooterContainer>
    </>)

}
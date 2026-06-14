import styled from "styled-components";

import Introduction from "../components/Introduction";
import Navigation from "../components/Navigation";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr;
  place-items: center;
  gap: 6rem;
`;

const Bolded = styled.span`
    font-weight: 600;
`

export default function Page1() {
  return (
    <Container>
      <Introduction/>
      <Navigation/>
      <p>yangmma03 [at] gmail [dot] com <Bolded>|</Bolded> /in/mma-yang/</p>
    </Container>
  );
}
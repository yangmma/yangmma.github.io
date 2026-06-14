import styled from "styled-components";

import Introduction from "../components/Introduction";
import Navigation from "../components/Navigation";
import Footer from "../components/widgets/Footer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  place-items: center;
  gap: 4rem;
`;

export default function Page1() {
  return (
    <>
      <Container>
        <Introduction/>
        <Navigation/>
      </Container>
    </>
  );
}
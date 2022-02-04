import { Container } from "bumbag";
import React from "react";
import ClientCalculator from "../../components/organisms/clientCalculator";
import Main from "../../components/templates/main";

const Home = () => {
  return (
    <Main>
      <Container>
          <ClientCalculator/>
      </Container>
    </Main>
  );
};

export default Home;

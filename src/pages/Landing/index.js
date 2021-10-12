import React from "react";

import Background from "../../components/Background";
import Advice from "../../components/Advice";
import ThemeButton from "../../components/ThemeButton";

import { Container } from "./styles";

function Landing() {
  return (
    <Container>
      <Background />
      <ThemeButton />

      <Advice />
    </Container>
  );
}

export default Landing;

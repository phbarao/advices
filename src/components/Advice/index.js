import React from "react";

import { Container } from "./styles";
import { useAdvice } from "../../contexts/advice";
import { useTheme } from "../../contexts/theme";

function Advice() {
  const { advice } = useAdvice();
  const { theme } = useTheme();

  return (
    <Container style={{ background: theme.colors.background }}>
      <p style={{ color: theme.colors.text }}>{advice}</p>
    </Container>
  );
}

export default Advice;

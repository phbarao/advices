import React from "react";

import { useAdvice } from "../../contexts/advice";
import { useTheme } from "../../contexts/theme";

import LoadingSpinner from "../../components/LoadingSpinner";

import { Container } from "./styles";

function Advice() {
  const { advice, loading } = useAdvice();
  const { theme } = useTheme();

  return (
    <Container style={{ background: theme.colors.background }}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <p style={{ color: theme.colors.text }}>{advice}</p>
      )}
    </Container>
  );
}

export default Advice;

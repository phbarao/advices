import React from "react";
import { CgSpinner } from "react-icons/cg";

import { Container } from "./styles";

export default function LoadingSpinner() {
  return (
    <Container>
      <CgSpinner className="spinner-icon" size={30} color="gray" />
    </Container>
  );
}

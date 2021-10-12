import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 800px;
  max-height: 600px;
  border-radius: 20px;
  transition: 0.6s;
  padding: 60px;

  p {
    font-size: 2.2rem;
    text-align: center;

    @media (min-width: 720px) {
      font-size: 2rem;
    }
  }
`;

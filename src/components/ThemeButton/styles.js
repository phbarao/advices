import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    position: absolute;
    top: 50px;
    right: 50px;

    transition: 0.5s;

    &:hover {
      border-radius: 50%;
      transition: 0.5s;
    }

    @media (min-width: 720px) {
      width: 70px;
      height: 70px;
    }
  }
`;

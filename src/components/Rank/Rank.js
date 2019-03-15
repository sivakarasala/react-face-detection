import React from "react";
import styled from "styled-components";

const Rank = () => {
  return (
    <Container>
      <C1>{"Siva, your current rank is..."}</C1>
      <C2>{"#2"}</C2>
    </Container>
  );
};

export default Rank;

const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const C1 = styled.div`
  font-size: 1em;
`;
const C2 = styled.div`
  font-size: 2em;
`;

import React from "react";
import styled from "styled-components";

const Rank = () => {
  return (
    <Container>
      <div>{"Siva, your current rank is..."}</div>
      <div>{"#2"}</div>
    </Container>
  );
};

export default Rank;

const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 2em;
`;

import React from "react";
import styled from "styled-components";

const Rank = ({ name, entries }) => {
  return (
    <Container>
      <C1>{`${name}, your current rank is...`}</C1>
      <C2>{`${entries}`}</C2>
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

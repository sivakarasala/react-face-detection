import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <P>Sign Out</P>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  align-self: flex-end;
`;
const P = styled.p`
  /* margin: 1em; */
  padding: 3px;
  /* border: 2px solid #9d50bb; */
  color: #fff;
  font-size: 1.25em;
  /* border-radius: 5px; */
  cursor: pointer;
  text-decoration: underline;
`;

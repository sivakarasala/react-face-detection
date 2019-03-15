import React from "react";
import styled from "styled-components";

const ImageLinkForm = () => {
  return (
    <Container>
      <P>{"This magic trident will detect faces in your pictures. Try it"}</P>
      <LocalCon>
        <input type="text" />
        <button>Detect</button>
      </LocalCon>
    </Container>
  );
};

export default ImageLinkForm;

const Container = styled.div`
  /* flex: 1; */
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const LocalCon = styled.div`
  display: flex;
  width: 100%;
  padding: 2em;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  border: 2px solid none;
  border-radius: 3px;
  box-shadow: 2px 2px 10px 5px #96c93d;
  input {
    width: 60%;
    padding: 0.4em;
    border-radius: 5px;
    font-size: 0.8em;
  }
  button {
    width: 30%;
    padding: 0.4em;
    font-size: 0.8em;
    border-radius: 5px;
    background-color: #00b09b;
    color: #fff;
    transition: 300ms linear;
    :hover {
      transform: scale(1.1);
    }
  }
  background: linear-gradient(to bottom, #f3f9a7 0%, #cac531 100%);
`;
const P = styled.div`
  font-size: 1em;
  color: #333;
  justify-self: center;
  margin: 0.5em;
`;

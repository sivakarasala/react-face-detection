import React from "react";
import styled from "styled-components";

const Register = ({ onRouteChange }) => {
  return (
    <Container>
      <div className="fi1">
        <fieldset className="fi2">
          <legend>Register</legend>
          <InnerCon>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </InnerCon>
          <InnerCon>
            <label htmlFor="email-address">Email</label>
            <input type="email" name="email-address" id="email-address" />
          </InnerCon>
          <InnerCon>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </InnerCon>
        </fieldset>
        <InnerCon2>
          <input
            type="submit"
            value="Register"
            onClick={() => onRouteChange("home")}
          />
        </InnerCon2>
      </div>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px grey;
  height: 75vh;
  .fi1 {
    width: 90%;
    margin: 0;
    padding: 0.5em;
    height: 40vh;
  }
  fieldset {
    border: 0px;
    margin: 0;
  }
  legend {
    text-align: center;
    font-size: 2em;
    font-weight: 300;
    color: grey;
    margin-bottom: 0.2em;
  }
  input {
    width: 80%;
    padding: 0.5em;
    background: transparent;
    border: 2px solid grey;
  }
`;
const InnerCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
  label {
    color: grey;
    padding: 0.5em;
  }
`;

const InnerCon2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 50%;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    font-weight: 500;
    font-size: 1.2em;
    border-radius: 5px;
    color: grey;
  }
  margin-bottom: 1em;
`;

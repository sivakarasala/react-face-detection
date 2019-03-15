import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import Icon from "../IconMap/Icon";

const Logo = () => {
  return (
    <Container>
      <Tilt
        className="Tilt"
        options={{ max: 50 }}
        style={{
          height: 120,
          width: 120
        }}
      >
        <div className="Tilt-inner" style={{ align: "center" }}>
          <Icon
            style={{ paddingTop: "5px" }}
            name="trident"
            color="#96c93d"
            size={100}
          />
        </div>
      </Tilt>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  align-self: flex-start;
  margin-top: 0;
  margin-bottom: 1em;
  justify-content: center;
  margin-left: 20px;
  .Tilt {
    /* margin: 3px; */
    background: linear-gradient(89deg, #00b09b 0%, #96c93d 100%);
    border: 1px light none;
    border-radius: 2px;
    box-shadow: 1px 0px 5px 2px #96c93d;
    display: flex;
    justify-content: center;
  }
  /* .Tilt-inner {
    transform: rotate(90deg);
  } */
`;

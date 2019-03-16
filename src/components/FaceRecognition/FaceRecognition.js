import React from "react";
import styled from "styled-components";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <Container>
      <ImgCon>
        <img id="inputImage" alt="" src={imageUrl} width="100%" height="50%" />
        <BoundingBox
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </ImgCon>
    </Container>
  );
};

const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5em;
`;
const ImgCon = styled.div`
  justify-self: center;
  width: 30%;
  margin: 0.5em;
  position: relative;
`;
const BoundingBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;
export default FaceRecognition;

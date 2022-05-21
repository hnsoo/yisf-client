import React from 'react';
import styled from "styled-components";

export default function Icon({color, img}){
    return (
        <Container BackgroundColor={color}>
            {img}
        </Container>
    );
}

const Container = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.BackgroundColor};
  max-width: 100%;
  width: 80%;
  height: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
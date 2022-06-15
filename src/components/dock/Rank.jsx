import React from 'react';
import styled from "styled-components";

export default function Rank(){
    return (
        <Container>
            <b>실시간 유저 랭킹</b>
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`

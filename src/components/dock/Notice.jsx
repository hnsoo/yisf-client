import React from 'react';
import styled from "styled-components";

export default function Notice(){
    return (
        <Container>
            <b>공지사항</b><br/>
            공지사항입니다.<br/><br/>
            <b>대회목적</b><br/>
            대회목적입니다.<br/><br/>
            <b>대회규칙</b><br/>
            대회규칙입니다.<br/><br/>
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`

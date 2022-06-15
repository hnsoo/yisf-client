import React from 'react';
import styled from "styled-components";

export default function Mypage(){
    return (
        <Container>
            <b>User name</b><br/>
            khsoo2439<br/><br/>
            <b>E-mail</b><br/>
            khsoo2439@naver.com<br/><br/>
            <b>My score</b><br/>
            1000<br/><br/>
            <b>My solved</b><br/>

        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`


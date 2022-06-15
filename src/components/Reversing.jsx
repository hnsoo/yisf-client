import React, {useEffect} from 'react';
import styled from "styled-components";
import ProblemService from "../service/problem";

export default function Reversing(){
    useEffect(() => {
        ProblemService.pwnableList()
            .then()
    }, [])

    return (
        <Container>

        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`

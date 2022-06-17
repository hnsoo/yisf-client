import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProblemService from "../service/problem";
import ProblemIcon from "./ProblemIcon";

export default function Pwnable(){
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        ProblemService.pwnableList()
            .then(
                (data) => setProblems(data)
            )
    }, [])

    return (
        <Container>
            {problems.map(problem =>
                <ProblemIcon
                    key={problem.id}
                    field={problem.type}
                    title={problem.title}
                />
            )}
        </Container>
    );
}
const Container = styled.div`
  display: flex;
  text-align: left;
  padding: 1rem;
`

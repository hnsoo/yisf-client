import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProblemIcon from "./ProblemIcon";
import {useDispatch, useSelector} from "react-redux";
import {getProblems} from "../redux/ations/terminal";

export default function Problem({field}){
    const problems = useSelector(state => state.terminal.problems)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProblems(field))
    }, [field, dispatch])
    return (
        <Container>
            {problems && problems.map(problem =>
                <ProblemIcon
                    key={problem.id}
                    id={problem.id}
                    type={problem.type}
                    title={problem.title}
                />
            )}
        </Container>
    );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding: 1rem;
`

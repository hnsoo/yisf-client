import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProblemIcon from "./ProblemIcon";
import {useDispatch, useSelector} from "react-redux";
import {getProblems} from "../redux/ations/terminal";

export default function Problem({field}){
    const problems = useSelector(state => state.terminal.problems)
    const dispatch = useDispatch();
    const [isIconSelected, setIsIconsSelected] = useState([]);

    useEffect(() => {
        dispatch(getProblems(field))
        if(problems) setIsIconsSelected(Array(problems.length).fill(false));
    }, [field, dispatch])

    const handleClick = idx => {
        const newArr = Array(problems.length).fill(false);
        newArr[idx] = true;
        setIsIconsSelected(newArr);
    }

    return (
        <Container>
            {problems && problems.map((problem, idx) =>
                <ProblemIcon
                    key={problem.id}
                    info={problem}
                    isSelected={isIconSelected[idx]}
                    handleClick={handleClick}
                    elementIndex={idx}
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

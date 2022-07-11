import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProblemIcon from "./ProblemIcon";
import {useDispatch, useSelector} from "react-redux";
import {getProblems} from "../redux/actions/problem";
import {logout} from "../redux/actions/auth";
import AuthService from "../service/auth";
import {getMyInfo} from "../redux/actions/account";

export default function Problem({field}){
    const problems = useSelector(state => state.problem.problems)
    const dispatch = useDispatch();
    const [isIconSelected, setIsIconsSelected] = useState([]);

    useEffect(() => {
        dispatch(getMyInfo())
            .then()
            .catch((err) => {
                // 세션 관련 에러
                dispatch(logout)
                AuthService.logout()
            })

        dispatch(getProblems(field))
            .then()
            .catch((err)=> {
                // 세션 관련 에러
                dispatch(logout())
                AuthService.logout()
            })
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

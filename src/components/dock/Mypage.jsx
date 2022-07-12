import React, {useEffect} from 'react';
import styled from "styled-components";
import {logout} from "../../redux/actions/auth";
import AuthService from "../../service/auth";
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../../redux/actions/account";

export default function Mypage(){
    const dispatch = useDispatch()

    const username = useSelector(state => state.account.username)
    const nickname = useSelector(state => state.account.nickname)
    const realName = useSelector(state => state.account.realName)
    const email = useSelector(state => state.account.email)
    const score = useSelector(state => state.account.score)

    const solvedPwnable = useSelector(state => state.account.pwnable)
    const solvedWeb = useSelector(state => state.account.web)
    const solvedForensic = useSelector(state => state.account.forensic)
    const solvedReversing = useSelector(state => state.account.reversing)
    const solvedMisc = useSelector(state => state.account.misc)

    useEffect(() => {
        dispatch(getMyInfo())
            .then()
            .catch((err) => {
                // 세션 관련 에러
                dispatch(logout)
                AuthService.logout()
            })
        console.log(solvedPwnable)
    }, [dispatch])

    const Mysolved = (problems) => {
        if(problems.length > 0){
            let result = []
            for(let problem of problems){
                result.push(<li>{problem.title}</li>);
            }
            return result;
        }
        else return (<span style={{color: "gray"}}>no solved</span>)
    }

    return (
        <Container>
            <Title>ID</Title>
            <Description>{username}</Description>
            <Line />
            <Title>Name</Title>
            <Description>{realName}</Description>
            <Line />
            <Title>Nickname</Title>
            <Description>{nickname}</Description>
            <Line />
            <Title>E-mail</Title>
            <Description>{email}</Description>
            <Line />
            <Title>My score</Title>
            <Description>{score}</Description>
            <Line />
            <Title>My solved</Title>
            <Solved>
                <Section>
                    Reversing
                    <List>
                        {Mysolved(solvedReversing)}
                    </List>
                </Section>
                <Section>
                    Forensic
                    <List>
                        {Mysolved(solvedForensic)}
                    </List>
                </Section>
                <Section>
                    Web
                    <List>
                        {Mysolved(solvedWeb)}
                    </List>
                </Section>
                <Section>
                    Pwnable
                    <List>
                        {Mysolved(solvedPwnable)}
                    </List>
                </Section>
                <Section>
                    Misc
                    <List>
                        {Mysolved(solvedMisc)}
                    </List>
                </Section>
            </Solved>
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 1rem;
`
const Title = styled.div`
  font-size: large;
  font-family: "NotoBold", sans-serif;
`
const Description = styled.div`
  margin-top: 2px;
  margin-bottom: 15px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(203,203,203,0.5);
  margin-top: 15px;
  margin-bottom: 15px;
`
const Solved = styled.div`
  display: flex;
  justify-content: space-between;
`
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const List = styled.ul`
  background: lightpink;
  width: 100px;
  text-align: center;
  border-radius: 15px;
`

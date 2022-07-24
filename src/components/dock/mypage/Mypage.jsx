import React, {useEffect} from 'react';
import styled from "styled-components";
import {logout} from "../../../redux/actions/auth";
import AuthService from "../../../service/auth";
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../../../redux/actions/account";
import SolvedList from "./SolvedList"

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

    // 첫 로드시 나의 정보 로드
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
                    <ListContainer>
                        <SolvedList problems={solvedReversing} />
                    </ListContainer>
                </Section>
                <Section>
                    Forensic
                    <ListContainer>
                        <SolvedList problems={solvedForensic} />
                    </ListContainer>
                </Section>
                <Section>
                    Web
                    <ListContainer>
                        <SolvedList problems={solvedWeb} />
                    </ListContainer>
                </Section>
                <Section>
                    Pwnable
                    <ListContainer>
                        <SolvedList problems={solvedPwnable} />
                    </ListContainer>
                </Section>
                <Section>
                    Misc
                    <ListContainer>
                        <SolvedList problems={solvedMisc} />
                    </ListContainer>
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
  //justify-content: space-between;
`
const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  text-align: center;
`
const ListContainer = styled.div`
  background: rgba(220,80,80,0.1);
  border-radius: 15px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
`
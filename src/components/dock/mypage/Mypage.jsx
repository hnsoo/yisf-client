import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from 'react-modal';
import {logout} from "../../../redux/actions/auth";
import AuthService from "../../../service/auth";
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../../../redux/actions/account";
import SolvedList from "./SolvedList"
import ChangePw from "./ChangePw";

export default function Mypage(){
    const dispatch = useDispatch()

    const [isChangePwOpened, setIsChangePwOpened] = useState(false);

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

    const clickChangePw = () => {
        setIsChangePwOpened(isChangePwOpened => !isChangePwOpened)
    }

    Modal.setAppElement('#root')

    return (
        <>
            <Modal
                isOpen={isChangePwOpened}
                closeTimeoutMS={300}
                onRequestClose={() => setIsChangePwOpened(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        zIndex: 11,
                        height: "105%",
                    },
                    content: {
                        top: '25%',
                        left: '40%',
                        right: '40%',
                        bottom: '30%',
                    }
                }}
            >
                <ChangePw setIsChangePwOpened={setIsChangePwOpened}/>
            </Modal>
            <Container>
                <Title>My Info</Title>
                <Description>아이디 : {username}</Description>
                <Description>닉네임 : {nickname}</Description>
                <Description>이름 : {realName}</Description>
                <Description>이메일 : {email}</Description>
                <ChangePwWord onClick={clickChangePw}>비밀번호 변경</ChangePwWord>
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
        </>
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
  font-family: "PretendardBold", sans-serif;
  margin-bottom: 15px;
`
const Description = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 0.9rem;
`
const ChangePwWord = styled.div`
  color: #f43232;
  :hover {
    color:#e42222;
    cursor: pointer;
  }
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
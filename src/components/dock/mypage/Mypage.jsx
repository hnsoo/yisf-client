import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from 'react-modal';
import {logout} from "../../../redux/actions/auth";
import AuthService from "../../../service/auth";
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../../../redux/actions/account";
import SolvedList from "./SolvedList"

export default function Mypage(){
    const dispatch = useDispatch()

    const [isChangePwOpened, setIsChangePwOpened] = useState(false);
    const [oldPw, setOldPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [checkPw, setCheckPw] = useState("");

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

    const onChangeOldPw = (e) => {
        setOldPw(e.target.value);
    };

    const onChangeNewPw = (e) => {
        setNewPw(e.target.value);
    };

    const onChangeCheckPw = (e) => {
        setCheckPw(e.target.value);
    };

    const textConfirmPw = () => {
        if(newPw.length > 0 || checkPw.length > 0){
            if(newPw === checkPw)
                return <span style={{"color": "darkgreen"}}>비밀번호 일치</span>
            else
                return <span style={{"color": "indianred"}}>비밀번호 불일치</span>
        }
        else{
            return <span>&nbsp;</span>
        }
    }

    const clickChangePw = () => {
        setIsChangePwOpened(isChangePwOpened => !isChangePwOpened)
    }


    Modal.setAppElement('#root')

    return (
        <>
            <Modal
                isOpen={isChangePwOpened}
                onRequestClose={() => setIsChangePwOpened(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        zIndex: 11,
                    },
                    content: {
                        position: 'absolute',
                        top: '30%',
                        left: '40%',
                        right: '40%',
                        bottom: '30%',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px',
                    }
                }}
            >
                <ChangePwContainer>
                    <ChangePwTitle>비밀번호 변경</ChangePwTitle>
                    <div>
                        <div>
                            <ChangePwInput
                                placeholder="현재 비밀번호"
                                onChange={onChangeOldPw}
                                vlaue={oldPw}
                                type="password"
                            />
                        </div>
                        <div>
                            <ChangePwWord style={{"color": "blue"}}>8 ~ 20 사이 비밀번호</ChangePwWord>
                            <ChangePwInput
                                placeholder="새 비밀번호"
                                onChange={onChangeNewPw}
                                vlaue={newPw}
                                type="password"
                            />
                        </div>
                        <div>
                            <ChangePwWord>{textConfirmPw()}</ChangePwWord>
                            <ChangePwInput
                                placeholder="비밀번호 확인"
                                onChange={onChangeCheckPw}
                                vlaue={checkPw}
                                type="password"
                            />
                        </div>
                    </div>
                    <div>
                        <button>취소</button>
                        <button>확인</button>
                    </div>
                </ChangePwContainer>
            </Modal>
            <Container>
                <Title>My Info</Title>
                <Description>아이디 : {username}</Description>
                <Description>닉네임 : {nickname}</Description>
                <Description>이름 : {realName}</Description>
                <Description>이메일 : {email}</Description>
                <Description onClick={clickChangePw} style={{"color": "#f43232"}}>비밀번호 변경</Description>
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
const ChangePwContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const ChangePwTitle = styled.b`
  font-size: large;
`
const ChangePwWord = styled.div`
  font-size: small;
`
const ChangePwInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`
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
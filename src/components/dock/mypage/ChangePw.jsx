import React, {useState} from "react";
import styled from "styled-components";
import {useEffect} from "react";

export default function ChangePw({setIsChangePwOpened}){
    const [oldPw, setOldPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [checkPw, setCheckPw] = useState("");

    useEffect(() => {
        setOldPw("")
        setNewPw("")
        setCheckPw("")
    }, [])

    const onChangeOldPw = (e) => {
        setOldPw(e.target.value);
    };

    const onChangeNewPw = (e) => {
        setNewPw(e.target.value);
    };

    const onChangeCheckPw = (e) => {
        setCheckPw(e.target.value);
    };

    const textConfirmPwLen = () => {
        if(newPw.length >= 8 && newPw.length <= 20)
            return <span style={{"color": "darkgreen"}}>8 ~ 20 사이 비밀번호</span>
        else
            return <span style={{"color": "indianred"}}>8 ~ 20 사이 비밀번호 입력</span>
    }

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

    const clickSubmit = () => {

    }

    const clickCancel = () => {
        setIsChangePwOpened(false)
    }

    return (
        <Container>
            <Title>비밀번호 변경</Title>
            <div>
                <div>
                    <Input
                        placeholder="현재 비밀번호"
                        onChange={onChangeOldPw}
                        vlaue={oldPw}
                        type="password"
                    />
                </div>
                <div>
                    <Word>{textConfirmPwLen()}</Word>
                    <Input
                        placeholder="새 비밀번호"
                        onChange={onChangeNewPw}
                        vlaue={newPw}
                        type="password"
                    />
                </div>
                <div>
                    <Word>{textConfirmPw()}</Word>
                    <Input
                        placeholder="비밀번호 확인"
                        onChange={onChangeCheckPw}
                        vlaue={checkPw}
                        type="password"
                    />
                </div>
            </div>
            <ButtonContainer>
                <Cancel onClick={clickCancel}>취소</Cancel>
                <Submit onClick={clickSubmit}>확인</Submit>
            </ButtonContainer>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const Title = styled.b`
  font-size: large;
`
const Word = styled.div`
  font-size: small;
`
const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  outline-color: #FE6B8B;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ChangePwButton = styled.button`
  width: 90px;
  height: 30px;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`
const Cancel = styled(ChangePwButton)`
  background-color: #997570;
  margin-right: 10px;
  :hover {
    background-color: #896560;
  }
`
const Submit = styled(ChangePwButton)`
  background-color: #AC3652;
  :hover {
    background-color: #9C2642;
  }
`
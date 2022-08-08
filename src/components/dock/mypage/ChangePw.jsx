import React, {useState} from "react";
import styled from "styled-components";
import {useEffect} from "react";
import AccountService from "../../../service/account"
import AuthService from "../../../service/auth";
import {logout} from "../../../redux/actions/auth";
import {useDispatch} from "react-redux";
export default function ChangePw({setIsChangePwOpened}){
    const [oldPw, setOldPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    const dispatch = useDispatch()

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
    // 엔터 누를시 패스워드 변경 실행
    const onKyePress = (e) => {
        if(e.key === "Enter") submit()
    }

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

    const submit = () => {
        if(newPw.length >= 8 && newPw.length <= 20){
            if(newPw === checkPw){
                // 비밀번호 변경 API 요청
                AccountService.changePw(oldPw, newPw)
                    .then(() => {
                        alert("비밀번호가 변경 되었습니다.")
                        setIsChangePwOpened(false)
                    })
                    .catch((err)=> {
                        if(!err) {
                            AuthService.logout()
                            dispatch(logout())
                        }
                        if (err.message === "HANDLE_ACCESS_DENIED")
                            alert("잘못된 접근입니다.");
                        else if(err.message === "PASSWORD_NOT_MATCH")
                            alert("기존 비밀번호 입력이 맞지 않습니다.");
                        else if(err.message === "MEMBER_NOT_FOUND")
                            alert("존재하지 않는 회원 입니다.");
                        else {
                            alert("비밀번호 변경에 실패했습니다.")
                        }
                    })
            }
            else{
                alert("비밀번호 입력이 일치하지 않습니다.")
            }
        }
        else{
            alert("8 ~ 20 사이로 비밀번호를 설정바랍니다.")
        }
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
                        onKeyPress={onKyePress}
                        type="password"
                    />
                </div>
                <div>
                    <Word>{textConfirmPwLen()}</Word>
                    <Input
                        placeholder="새 비밀번호"
                        onChange={onChangeNewPw}
                        vlaue={newPw}
                        onKeyPress={onKyePress}
                        type="password"
                    />
                </div>
                <div>
                    <Word>{textConfirmPw()}</Word>
                    <Input
                        placeholder="비밀번호 확인"
                        onChange={onChangeCheckPw}
                        vlaue={checkPw}
                        onKeyPress={onKyePress}
                        type="password"
                    />
                </div>
            </div>
            <ButtonContainer>
                <Cancel onClick={clickCancel}>취소</Cancel>
                <Submit onClick={submit}>확인</Submit>
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
const Button = styled.button`
  width: 90px;
  height: 30px;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`
const Cancel = styled(Button)`
  background-color: #997570;
  margin-right: 10px;
  :hover {
    background-color: #896560;
  }
`
const Submit = styled(Button)`
  background-color: #AC3652;
  :hover {
    background-color: #9C2642;
  }
`
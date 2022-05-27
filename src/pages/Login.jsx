import React, {useState} from "react";
import styled from "styled-components";
import AuthService from "../service/Auth"
import WallPaper from '../assets/img/wallPaper.jpg';
import {useCookies} from "react-cookie";

export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['refresh']);

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClickLogin = () => {
        console.log('로그인 클릭');
        AuthService.login(id, password)
    }

    return (
        <Background>
            <Container>
                <Title>YISF OS</Title>
                <LoginContainer>
                    <MainText>LOGIN</MainText>
                    <IdBox
                        placeholder="User name"
                        value={id}
                        type="text"
                        onChange={onChangeId}
                    />
                    <PwBox
                        placeholder="password"
                        value={password}
                        type={"password"}
                        onChange={onChangePassword}
                        Show={id.length > 0 ? "box" : "none"}
                    />
                    <LoginBtn
                        Show={password.length > 0 ? "box" : "none"}
                        onClick={onClickLogin}
                    >Login</LoginBtn>
                </LoginContainer>
            </Container>
        </Background>
    );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${WallPaper});
  background-size: cover;
`;

const Title = styled.div`
  color: white;
  padding: 0.7em;
`

const MainText = styled.div`
  color: white;
  padding-bottom: 0.7em;
`

const Container = styled.div`
  position: absolute;
  top: 35%;
  left: 10%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(60, 22, 44, 0.6);
  border-radius: 10px;
  padding: 0.7em;
`

const IdBox = styled.input`
  height: 25px;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 10px;
  
  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
  }  
`

const PwBox = styled.input`
  display: ${(props) => props.Show};
  height: 25px;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 10px;
  :focus {
    outline: none;
  }
`

const LoginBtn = styled.button`
  display: ${(props) => props.Show};
  height: 25px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid palevioletred;
  background-color: white;
  color: palevioletred;
`

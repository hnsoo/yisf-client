import React, {useState} from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux"
import WallPaper from '../assets/img/wallpaper.jpg';
import {Navigate, useNavigate} from 'react-router-dom';
import { login } from "../redux/actions/auth";

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch();

    // 로그인 되어 있다면 경로 "/"로 이동
    // if (isLoggedIn) {
    //     return <Navigate to="/" />;
    // }

    // 아이디 입력 감지
    const onChangeId = (e) => {
        setId(e.target.value);
    };

    // 패스워드 입력 감지
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    // 엔터 누를시 로그인 핸들링
    const onKyePress = (e) => {
        if(e.key === "Enter") onClickLogin()
    }

    // 로그인 버튼 핸들러
    const onClickLogin = () => {
        // dispatch(login(id, password))
        //     .then()
        //     .catch(() => {
        //         alert('Login Fail')
        //     });
        navigate("/");
    };

    return (
        <Background>
            <Container>
                <Title>YISF OS</Title>
                <LoginContainer>
                    <MainText>LOGIN</MainText>
                    <IdBox
                        onKeyPress={onKyePress}
                        placeholder="User name"
                        value={id}
                        type="text"
                        onChange={onChangeId}
                    />
                    <PwBox
                        onKeyPress={onKyePress}
                        placeholder="Password"
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
export default Login;

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
  font-size: large;
  padding-bottom: 0.7em;
  padding-left: 0.4em;
`

const MainText = styled.div`
  color: white;
  padding-bottom: 0.7em;
`

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(60, 22, 44, 0.6);
  border-radius: 10px;
  padding: 0.8em;
`
const Box = styled.input`
  height: 25px;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 10px;
  padding-left: 7px;
  padding-bottom: 5px;
  :focus {
    outline: none;
  }
`

const IdBox = styled(Box)`

`

const PwBox = styled(Box)`
  display: ${(props) => props.Show};

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

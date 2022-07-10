import React from 'react';
import styled from "styled-components";
import {HiOutlineLogout} from 'react-icons/hi'
import AuthService from "../service/auth";
import {useDispatch} from "react-redux";
import {logout} from "../redux/actions/auth";

export default function TopBar() {

    const dispatch = useDispatch()

    const clickLogout = () => {
        // 로컬스토리지, 쿠키 제거
        AuthService.logout()
        // isLogedin false
        dispatch(logout())
    }

    return (
      <Container>
          <div/>
          <Timer>
            35:24:50
          </Timer>
          <LogoutContainer>
            <LogoutImg>
                <HiOutlineLogout size="20px" color="white"/>
            </LogoutImg>
            <LogoutText
            onClick={clickLogout}
            >Log out</LogoutText>
          </LogoutContainer>
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1.8rem;
  background: #3A2D34;
  justify-content: space-between;
  align-items: center;
`
const Timer = styled.div`
  color: white;
  font-size: 1.1rem;
`

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
`

const LogoutImg = styled.div`
  width: 20px;
  height: 20px;
  padding-right: 7px;
`
const LogoutText = styled.div`
  color: white;
  font-size: 1.1rem;
  padding-right: 15px;
  padding-bottom: 1px;
  :hover{
   cursor: pointer; 
  }
`
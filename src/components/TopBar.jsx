import React from 'react';
import styled from "styled-components";
import {HiOutlineLogout} from 'react-icons/hi'

export default function TopBar() {
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
            <LogoutText>Log out</LogoutText>
          </LogoutContainer>
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
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
  justify-content: flex-end;
  padding: 3px;
`

const LogoutImg = styled.div`
  width: 20px;
  height: 20px;
  padding-top: 4px;
  padding-right: 7px;
`
const LogoutText = styled.div`
  color: white;
  font-size: 1.1rem;
  padding-right: 15px;
`
import React from 'react';
import styled, {keyframes} from "styled-components";
import {HiOutlineLogout} from 'react-icons/hi'
import AuthService from "../service/auth";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/auth";
import {IoMdNotifications} from "react-icons/io"
import {closeNotification, openNotification} from "../redux/actions/notification";

export default function TopBar() {

    const dispatch = useDispatch()
    const isNotificationOpened = useSelector(state => state.notification.isNotificationOpened)
    const clickNotification = () => {
        if(isNotificationOpened){
            dispatch(closeNotification())
        }
        else{
            dispatch(openNotification())
        }
    }

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
          <CtrlContainer>
            <IoMdNotifications size="20px" color="white"/>
            <CtrlText onClick={clickNotification}>
                Notification
            </CtrlText>
            <HiOutlineLogout size="20px" color="white"/>
            <CtrlText onClick={clickLogout}>
                Log out
            </CtrlText>
          </CtrlContainer>
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

const CtrlContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
`
const CtrlText = styled.div`
  color: white;
  font-size: 1.1rem;
  padding-left: 5px;
  padding-right: 20px;
  padding-bottom: 1px;
  :hover{
   cursor: pointer; 
  }
`
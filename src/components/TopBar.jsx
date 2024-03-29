import React from 'react';
import styled from "styled-components";
import {HiOutlineLogout} from 'react-icons/hi'
import AuthService from "../service/auth";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/auth";
import notificationIcon from "../assets/img/bell.png";
import newNotificationIcon from "../assets/img/notification.png";
import {closeNotification, getNotifications, openNotification, readNotifications} from "../redux/actions/notification";
import {useEffect, useState} from "react";
import UtilService from "../service/util";

export default function TopBar() {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const dispatch = useDispatch()
    const isNotificationOpened = useSelector(state => state.notification.isNotificationOpened)
    const isNewNotification = useSelector(state => state.notification.isNewNotification)

    useEffect(() => {
        // 서버 시간 로드
        UtilService.getTime()
            .then((data) => {
                let result = UtilService.calculateRemainTime(data.endTime)
                setHours(result.hours)
                setMinutes(result.minutes)
                setSeconds(result.seconds)
            })
    }, [])

    // 상단바 타이머
    useEffect(() => {
        const countdown = setInterval(() => {
            let result = UtilService.countDown(hours, minutes, seconds)
            if (result.clear)
                clearInterval(countdown)
            setHours(result.hours)
            setMinutes(result.minutes)
            setSeconds(result.seconds)
        }, 1000);
        return () => clearInterval(countdown);
    }, [hours, minutes, seconds]);

    // 알림 클릭 핸들링
    const clickNotification = () => {
        dispatch(readNotifications())
        if(isNotificationOpened){
            dispatch(closeNotification())
        }
        else{
            dispatch(getNotifications())
                .catch(() => {
                    // 세션 관련 에러
                    AuthService.logout()
                    dispatch(logout())
                })
            dispatch(openNotification())
        }
    }

    // 로그아웃 클릭 핸들링
    const clickLogout = () => {
        // 로컬스토리지, 쿠키 제거
        AuthService.logout()
        // isLogedin false
        dispatch(logout())
    }

    return (
      <Container>
          <div style={{width: "245px", height: "20px"}}/>
          <Timer>
              {`${hours}:${minutes}:${seconds}`}
          </Timer>
          <CtrlContainer>
            {
                isNewNotification ?
                <img src={newNotificationIcon} height="20px" alt="new notification"/>
                : <img src={notificationIcon} height="16px" alt="notification"/>
            }
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
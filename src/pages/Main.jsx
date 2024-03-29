import styled from "styled-components";
import WallPaper from '../assets/img/wallpaper.jpg';
import DockBar from "../components/dock/DockBar";
import TopBar from "../components/TopBar";
import IconFolder from "../assets/img/folder.png"
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import Folder from "../components/Folder";
import NotificationModal from "../components/NotificationModal"
import {closeFolder, openForensic, openMisc, openPwnable, openReversing, openWeb} from "../redux/actions/folder";
import ProblemModal from "../components/problem/ProblemModal";
import {
    deselectFolder,
    deselectNoticeModal,
    deselectProblemModal,
    selectFolder,
} from "../redux/actions/zIndex";
import {useEffect, useState} from "react";
import {closeProblemModal} from "../redux/actions/problem";
import NoticeModal from "../components/dock/notice/NoticeModal";
import {closeNoticeModal} from "../redux/actions/notice";
import {getNotifications} from "../redux/actions/notification";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthService from "../service/auth";
import {logout} from "../redux/actions/auth";
import React from "react";


export default function Main() {
    const initField = {
        "reversing": false,
        "forensic": false,
        "web": false,
        "pwnable": false,
        "misc": false,
    }
    const [isIconSelected, setIsIconsSelected] = useState({});

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isOpened = useSelector(state => state.folder.isOpened);
    const isProblemModalOpened = useSelector(state => state.problem.isProblemModalOpened);
    const isNoticeModalOpened = useSelector(state => state.notice.isNoticeModalOpened)
    const isNotificationOpened = useSelector(state => state.notification.isNotificationOpened)
    const folderZIndex = useSelector(state => state.zIndex.folderZIndex)
    const problemModalZIndex = useSelector(state => state.zIndex.problemModalZIndex)
    const noticeModalZIndex = useSelector(state => state.zIndex.noticeModalZIndex)
    const isNewNotification = useSelector(state => state.notification.isNewNotification)
    const dispatch = useDispatch();

    useEffect(() => {
        // 메인 첫 접속시 알림 로드
        if(isLoggedIn){
            dispatch(getNotifications())
                .catch(() => {
                    // 세션 관련 에러
                    AuthService.logout()
                    dispatch(logout())
                })
            // 메인 폴더 선택 해제
            setIsIconsSelected(initField)
        }
    }, [])

    // ESC 키다운시 가장 위에 있는 모달 종료
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                if(isOpened && folderZIndex > problemModalZIndex && folderZIndex > noticeModalZIndex) {
                    dispatch(closeFolder())
                    dispatch(deselectFolder())
                }
                else if(isProblemModalOpened && problemModalZIndex > folderZIndex && problemModalZIndex > noticeModalZIndex){
                    dispatch(closeProblemModal())
                    dispatch(deselectProblemModal())
                }
                else if(isNoticeModalOpened && noticeModalZIndex > folderZIndex && noticeModalZIndex > problemModalZIndex){
                    dispatch(closeNoticeModal())
                    dispatch(deselectNoticeModal())
                }
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [isOpened, isProblemModalOpened, isNoticeModalOpened, folderZIndex, problemModalZIndex, noticeModalZIndex])

    // 주기적으로 notification 로드
    useEffect(() => {
        let id = setInterval(() => {
            dispatch(getNotifications())
                .catch(() => {
                    // 세션 관련 에러
                    AuthService.logout()
                    dispatch(logout())
                })
        }, 60000);
        return () => clearInterval(id);
    }, []);

    // 만약 새로운 notification 수신시 토스트 알림 생성
    useEffect(() => {
        if(isNewNotification){
            notify();
        }
    }, [isNewNotification])

    // 로그인 상태가 아닐 경우 /login 으로 경로 이동
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    // 토스트 알림 설정
    const notify = () => toast.info('새로운 알림이 존재합니다!', {
        toastId: 'notice-notify',
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
    });

    // 폴더 아이콘과 마우스 간의 상호작용
    const clickFolderIcon = (e, field) => {
        switch (e.detail) {
            case 1:
                //when click once
                setIsIconsSelected(initField)
                const newField = initField;
                newField[field] = true;
                setIsIconsSelected(newField);
                break;
            case 2:
                //when click double~^^
                switch (field) {
                    case "reversing":
                        dispatch(openReversing())
                        break;
                    case "forensic":
                        dispatch(openForensic())
                        break;
                    case "web":
                        dispatch(openWeb())
                        break;
                    case "pwnable":
                        dispatch(openPwnable())
                        break;
                    case "misc":
                        dispatch(openMisc())
                        break;
                    default:
                }
                if(folderZIndex < 3){
                    dispatch(selectFolder())
                }
                break;
            default:
                return;
        }
    }

    return (
        <>
        <Background>
            <Header><TopBar/></Header>
            <SideBar><DockBar/></SideBar>
            <Content>
                <FolderContainer background={isIconSelected["reversing"]} onClick={(e)=>clickFolderIcon(e, "reversing")}>
                    <img src={IconFolder} height="100px" width="100px" alt="reversing-folder"/>Reversing
                </FolderContainer>
                <FolderContainer background={isIconSelected["forensic"]} onClick={(e)=>clickFolderIcon(e, "forensic")}>
                    <img src={IconFolder} height="100px" width="100px" alt="forensic-folder"/>Forensic
                </FolderContainer>
                <FolderContainer background={isIconSelected["web"]} onClick={(e)=>clickFolderIcon(e, "web")}>
                    <img src={IconFolder} height="100px" width="100px" alt="web-folder"/>Web
                </FolderContainer>
                <FolderContainer background={isIconSelected["pwnable"]} onClick={(e)=>clickFolderIcon(e, "pwnable")}>
                    <img src={IconFolder} height="100px" width="100px" alt="pwnable-folder"/>Pwnable
                </FolderContainer>
                <FolderContainer background={isIconSelected["misc"]} onClick={(e)=>clickFolderIcon(e, "misc")}>
                    <img src={IconFolder} height="100px" width="100px" alt="misc-folder"/>Misc
                </FolderContainer>
                {isOpened && <Folder />}
                {isProblemModalOpened && <ProblemModal />}
                {isNoticeModalOpened && <NoticeModal />}
                <ToastContainer
                    position="bottom-right"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable={false}
                />
            </Content>
        </Background>
        <Notification>
            <NotificationModal isNotificationOpened={isNotificationOpened}/>
        </Notification>
        </>
    );
}

const Background = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 150px 1fr;
  grid-template-areas: 
      "header header"
      "sidebar content";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${WallPaper});
  background-size: cover;
`
const Header = styled.div`
  grid-area: header;
`
const SideBar = styled.div`
  grid-area: sidebar;
`
const Content = styled.div`
  height: 95vh;
  grid-area: content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
`

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
  background: ${(props) => props.background ? "#6a5896": "FFFF00"};
  :hover {
    background: ${(props) => props.background ? "#6a5896" : "#75427e"};
  }
`

const Notification = styled.div`
  position: absolute; 
  z-index: 10;
  width: 300px;
  height: calc(100% - 40px);
  top: 40px;
  transition: 0.5s;
  right: ${(props) => props.children.props.isNotificationOpened ? "0px": "-300px" };
`


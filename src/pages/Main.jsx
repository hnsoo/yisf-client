import styled from "styled-components";
import WallPaper from '../assets/img/wallPaper.jpg';
import Dock from "../components/dock/Dock";
import TopBar from "../components/TopBar";
import IconFolder from "../assets/img/folder.png"
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import Folder from "../components/Folder";
import {openForensic, openMisc, openPwnable, openReversing, openWeb} from "../redux/ations/folder";
import Terminal from "../components/Terminal";

export default function Main() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isOpened = useSelector(state => state.folder.isOpened);
    const isTerminalOpened = useSelector(state => state.terminal.isTerminalOpened);
    const dispatch = useDispatch();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <Background>
            <Header><TopBar/></Header>
            <SideBar><Dock/></SideBar>
            <Content>
                <FolderContainer onClick={()=>dispatch(openReversing())}><img src={IconFolder} height="100px" width="100px" alt="reversing-folder"/>Reversing</FolderContainer>
                <FolderContainer onClick={()=>dispatch(openForensic())}><img src={IconFolder} height="100px" width="100px" alt="forensic-folder"/>Forensic</FolderContainer>
                <FolderContainer onClick={()=>dispatch(openWeb())}><img src={IconFolder} height="100px" width="100px" alt="web-folder"/>Web</FolderContainer>
                <FolderContainer onClick={()=>dispatch(openPwnable())}><img src={IconFolder} height="100px" width="100px" alt="pwnable-folder"/>Pwnable</FolderContainer>
                <FolderContainer onClick={()=>dispatch(openMisc())}><img src={IconFolder} height="100px" width="100px" alt="misc-folder"/>Misc</FolderContainer>
                {isOpened && <Folder />}
                {isTerminalOpened && <Terminal />}
            </Content>
        </Background>
    );
}

const Background = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 5vh 1fr;
  grid-template-columns: 10vw 1fr;
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
  width: 90vw;
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
`
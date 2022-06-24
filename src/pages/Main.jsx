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
import {selectFolder} from "../redux/ations/zIndex";
import {useState} from "react";

export default function Main() {
    const initField = {
        "reversing": false,
        "forensic": false,
        "web": false,
        "pwnable": false,
        "misc": false,
    }
    const [isIconSelected, setIsIconsSelected] = useState(initField);

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isOpened = useSelector(state => state.folder.isOpened);
    const isTerminalOpened = useSelector(state => state.terminal.isTerminalOpened);
    const folderZInder = useSelector(state => state.zIndex.folderZIndex)
    const dispatch = useDispatch();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    const clickFolderIcon = (field) => {
        setIsIconsSelected(initField)
        const newField = initField;
        newField[field] = true;
        setIsIconsSelected(newField);

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
        if(folderZInder < 2){
            dispatch(selectFolder())
        }
    }

    return (
        <Background>
            <Header><TopBar/></Header>
            <SideBar><Dock/></SideBar>
            <Content>
                <FolderContainer background={isIconSelected["reversing"]} onClick={()=>clickFolderIcon("reversing")}>
                    <img src={IconFolder} height="100px" width="100px" alt="reversing-folder"/>Reversing
                </FolderContainer>
                <FolderContainer background={isIconSelected["forensic"]} onClick={()=>clickFolderIcon("forensic")}>
                    <img src={IconFolder} height="100px" width="100px" alt="forensic-folder"/>Forensic
                </FolderContainer>
                <FolderContainer background={isIconSelected["web"]} onClick={()=>clickFolderIcon("web")}>
                    <img src={IconFolder} height="100px" width="100px" alt="web-folder"/>Web
                </FolderContainer>
                <FolderContainer background={isIconSelected["pwnable"]} onClick={()=>clickFolderIcon("pwnable")}>
                    <img src={IconFolder} height="100px" width="100px" alt="pwnable-folder"/>Pwnable
                </FolderContainer>
                <FolderContainer background={isIconSelected["misc"]} onClick={()=>clickFolderIcon("misc")}>
                    <img src={IconFolder} height="100px" width="100px" alt="misc-folder"/>Misc
                </FolderContainer>
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
  //disable Drag
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
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
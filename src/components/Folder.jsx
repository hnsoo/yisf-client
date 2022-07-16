import React, {useState} from 'react';
import styled from "styled-components";
import {FiHome} from 'react-icons/fi';
import {FaAngleLeft, FaAngleRight, FaHandshake} from 'react-icons/fa';
import {RiUser3Fill} from 'react-icons/ri';
import {BsBarChartFill, BsMegaphoneFill} from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';
import {useDispatch, useSelector} from "react-redux";
import Notice from "./dock/notice/Notice";
import {closeFolder, openMypage, openNotice, openRank, openSponsor} from "../redux/actions/folder";
import Mypage from "./dock/mypage/Mypage";
import Rank from "./dock/rank/Rank";
import Sponsor from "./dock/Sponsor";
import Problem from "./problem/Problem";
import {deselectFolder, selectFolder} from "../redux/actions/zIndex";
import {Rnd} from 'react-rnd';
import close from "../assets/img/close/folder-close.png"
import closeHover from "../assets/img/close/folder-close-hover.png"
import closeClick from "../assets/img/close/folder-close-down.png"


export default function Folder() {
    const [over, setOver] = useState(0);    // close btn mouse over
    const view = useSelector(state => state.folder.view)
    const folderZIndex = useSelector(state => state.zIndex.folderZIndex)
    const dispatch = useDispatch();

    const clickClose = () => {
        dispatch(closeFolder())
        dispatch(deselectFolder())
    }

    const SelectView = () => {
        switch (view) {
            case "notice":
                return <Notice />
            case "mypage":
                return <Mypage />
            case "rank":
                return <Rank />
            case "sponsor":
                return <Sponsor />
            case "pwnable":
            case "reversing":
            case "web":
            case "forensic":
            case "misc":
                return <Problem field={view}/>
            default:
        }
    }

    const clickFolder = () => {
        if (folderZIndex < 3) {
            dispatch(selectFolder())
        }
    }

    const closeWithMouse = () => {
        switch (over) {
            case 0:
                return close;
            case 1:
                return closeHover;
            case 2:
                return closeClick;
            default:
                return close;
        }
    }

    return (
        <Rnd
            dragHandleClassName={"header"}
            onMouseDown={clickFolder}
            default={{
                x: 100,
                y: 100,
                width: 900,
                height: 500,
            }}
            style={{
                "zIndex": folderZIndex,
                "display": "grid",
                "position": "absolute",
                "gridTemplateAreas":
                    `
                     "header header"
                     "sidebar content"
                     `,
                "textAlign": "center",
                "gridTemplateColumns": "150px 1fr",
                "gridTemplateRows": "50px 1fr",
                "boxShadow": "0 3px 6px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)"
            }}

            maxHeight={'80%'}
            maxWidth={'80%'}
            minHeight={450}
            minWidth={650}
            enableUserSelectHack={true}
            bounds="window"
        >
            <Header className="header">
                <Back><FaAngleLeft/></Back>
                <Front><FaAngleRight/></Front>
                <Address><FiHome/><Route>{view}</Route></Address>
                <Ctrl
                    onMouseOver={() => setOver(1)}
                    onMouseDown={() => setOver(2)}
                    onMouseOut={() => setOver(0)}
                >
                    <img
                        src={closeWithMouse()}
                        onClick={clickClose}
                        alt="close"
                    />
                </Ctrl>
            </Header>
            <SideBar>
                <Menu onClick={() => dispatch(openMypage())}><RiUser3Fill size="25"
                                                                          color="#4f4f4f"/><MenuTitle>MyPage</MenuTitle></Menu>
                <Menu onClick={() => dispatch(openRank())}><BsBarChartFill size="25"
                                                                           color="#4f4f4f"/><MenuTitle>Ranking</MenuTitle></Menu>
                <Menu><SiDiscord size="25" color="#4f4f4f"/><MenuTitle>Discord</MenuTitle></Menu>
                <Menu onClick={() => dispatch(openNotice())}><BsMegaphoneFill size="25"
                                                                              color="#4f4f4f"/><MenuTitle>Notice</MenuTitle></Menu>
                <Menu onClick={() => dispatch(openSponsor())}><FaHandshake size="25"
                                                                           color="#4f4f4f"/><MenuTitle>Sponsor</MenuTitle></Menu>
            </SideBar>
            <Content>
                {SelectView()}
            </Content>
        </Rnd>
    );
};

// Header
const Header = styled.div`
  background: #ebebeb;
  border: 2px solid #ececec;
  grid-area: header;
  padding: 6px;
`
const Back = styled.div`
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  width: 40px;
  height: 34px;
  left: 10px;
  background: #fafafa;
  mix-blend-mode: normal;
  border: 1px solid #cbcbcb;
  border-radius: 10px 0 0 10px;
`
const Front = styled.div`
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  width: 40px;
  height: 34px;
  left: 49px;
  background: #fafafa;
  mix-blend-mode: normal;
  border: 1px solid #cbcbcb;
  border-radius: 0 10px 10px 0;
`
const Address = styled.div`
  display: flex;
  padding: 8px;

  box-sizing: border-box;

  position: absolute;
  width: 450px;
  height: 34px;
  left: 100px;

  background: #fafafa;
  mix-blend-mode: normal;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
`

const Route = styled.div`
  position: absolute;
  left: 31px;
  bottom: 5px;
`

const Ctrl = styled.div`
  position: absolute;
  right: 10px;
  padding: 2px;
`

// SideBar
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background: #fafafa;
  border-left: 2px solid #ececec;
  border-right: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  padding: 0.5rem;
`

const Menu = styled.div`
  display: flex;
  padding: 8px;
  :hover{
    background: #f0f0f0;
  }
`

const MenuTitle = styled.div`
  font-size: 1.1rem;
  margin-left: 10px;
  padding-bottom: 5px;
`

// Content
const Content = styled.div`
  overflow: auto;
  //display: flex;
  background: white;
  border-right: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  grid-area: content;
  padding: 0.25rem;
`


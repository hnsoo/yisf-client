import React, {useState} from 'react';
import styled from "styled-components";
import Draggable from "react-draggable";
import {FiStopCircle, FiXCircle, FiHome} from 'react-icons/fi';
import {FaAngleLeft, FaAngleRight, FaHandshake} from 'react-icons/fa';
import {RiUser3Fill} from 'react-icons/ri';
import {BsBarChartFill, BsMegaphoneFill} from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';
import {useDispatch, useSelector} from "react-redux";
import Notice from "./dock/Notice";
import {closeFolder} from "../redux/ations/folder";
import Mypage from "./dock/Mypage";
import Rank from "./dock/Rank";
import Sponsor from "./dock/Sponsor";

export default function Folder(){
    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState(500)
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [isMove, setIsMove] = useState(false)
    const [divX, setDivX] = useState(0)
    const [divY, setDivY] = useState(0)

    const view = useSelector(state => state.folder.view)
    const dispatch = useDispatch();

    const clickClose = () => {
        dispatch(closeFolder())
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
            default:
        }
    }

    const dragStart = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    const dragEnd = (direction, e) => {
        switch (direction) {
            case "n":
                setHeight(height + (mouseY - e.clientY))
                setDivY(divY - (mouseY - e.clientY));
                break;
            case "s":
                setHeight(height - (mouseY - e.clientY));
                break;
            case "w":
                setWidth(width + (mouseX - e.clientX));
                setDivX(divX - (mouseX - e.clientX))
                break;
            case "e":
                setWidth(width - (mouseX - e.clientX));
                break;
            case "nw":
                setHeight(height + (mouseY - e.clientY))
                setDivY(divY - (mouseY - e.clientY));
                setWidth(width + (mouseX - e.clientX));
                setDivX(divX - (mouseX - e.clientX))
                break;
            case "ne":
                setHeight(height + (mouseY - e.clientY))
                setDivY(divY - (mouseY - e.clientY));
                setWidth(width - (mouseX - e.clientX));
                break;
            case "sw":
                setHeight(height - (mouseY - e.clientY));
                setWidth(width + (mouseX - e.clientX));
                setDivX(divX - (mouseX - e.clientX))
                break;
            default:
                setHeight(height - (mouseY - e.clientY));
                setWidth(width - (mouseX - e.clientX));
        }
        setIsMove(true)
    }

    const move = () => {
        return {x: divX, y:divY}
    }

    return (
        <>
            <Draggable handle={Header} defaultPosition={ isMove ? move() : {x:100, y:100}}>
                <Container ContainerHeight={height + "px"}
                           ContainerWidth={width + "px"} x={divX + "px"} y={divY + "px"}>
                    <TopLeft
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("nw", e)}
                    />
                    <TopRight
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("ne", e)}
                    />
                    <BottomLeft
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("sw", e)}
                    />
                    <BottomRight
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("se", e)}
                    />
                    <TopLine
                        LineWidth={width + "px"}
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("n", e)}
                    />
                    <BottomLine
                        LineWidth={width + "px"}
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("s", e)}
                    />
                    <LeftLine
                        LineHeight={height + "px"}
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("w", e)}
                    />
                    <RightLine
                        LineHeight={height + "px"}
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={e => dragEnd("e", e)}
                    />
                    <Header>
                        <Back><FaAngleLeft/></Back>
                        <Front><FaAngleRight/></Front>
                        <Address><FiHome/><Route>{view}</Route></Address>
                        <Ctrl>
                            <FiStopCircle size="30" color="#4f4f4f"/>
                            <FiXCircle
                                onClick={clickClose}
                                size="30"
                                color="#4f4f4f"
                            />
                        </Ctrl>
                    </Header>
                    <SideBar>
                        <Menu><RiUser3Fill size="25" color="#4f4f4f"/><MenuTitle>MyPage</MenuTitle></Menu>
                        <Menu><BsBarChartFill size="25" color="#4f4f4f"/><MenuTitle>Ranking</MenuTitle></Menu>
                        <Menu><SiDiscord size="25" color="#4f4f4f"/><MenuTitle>Discord</MenuTitle></Menu>
                        <Menu><BsMegaphoneFill size="25" color="#4f4f4f"/><MenuTitle>Notice</MenuTitle></Menu>
                        <Menu><FaHandshake size="25" color="#4f4f4f"/><MenuTitle>Sponsor</MenuTitle></Menu>
                    </SideBar>
                    <Content>
                        <SelectView />
                    </Content>
                </Container>
            </Draggable>
        </>
    );
}

// Container
const Container = styled.div`
  display: grid;
  height: ${(props) => props.ContainerHeight};
  width: ${(props) => props.ContainerWidth};
  position: absolute;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  grid-template-rows: 50px 1fr;
  grid-template-columns: 150px 1fr;
  grid-template-areas: 
      "header header"
      "sidebar content";
  text-align: center;
`

const resizer = styled.div`
  width: 20px;
  height: 20px;
  background: burlywood;
  position: absolute;
  z-index: 999;
`
const TopLeft = styled(resizer)`
    left: -5px;
    top: -5px;
    cursor: nwse-resize;
`
const TopRight = styled(resizer)`
    right: -5px;
    top: -5px;
    cursor: nesw-resize;
`
const BottomLeft = styled(resizer)`
    left: -5px;
    bottom: -5px;
    cursor: nesw-resize;
`
const BottomRight = styled(resizer)`
    right: -5px;
    bottom: -5px;
    cursor: nwse-resize;
`

const Line = styled.div`
  background-color: palevioletred;
  position: absolute;
  :active {
    background-color: blue;
  };
`
const TopLine = styled(Line)`
  top: 0;
  width: ${(props) => props.LineWidth};
  height: 5px;
  :hover {
    cursor: n-resize;
  };
`
const BottomLine = styled(Line)`
  bottom: 0;
  width: ${(props) => props.LineWidth};
  height: 5px;
  :hover {
    cursor: s-resize;
  };
`
const LeftLine = styled(Line)`
  left: 0;
  width: 5px;
  height: ${(props) => props.LineHeight};
  :hover {
    cursor: w-resize;
  };
`
const RightLine = styled(Line)`
  right: 0;
  width: 5px;
  height: ${(props) => props.LineHeight};
  :hover {
    cursor: e-resize;
  };
`

// Header
const Header = styled.div`
  background: white;
  border: 2px solid #A9A9A9;
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
  background: rgba(245, 245, 245, 0.03);
  mix-blend-mode: normal;
  border: 1px solid #A9A9A9;
  border-radius: 10px 0px 0px 10px;
`
const Front = styled.div`
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  width: 40px;
  height: 34px;
  left: 49px;
  background: rgba(245, 245, 245, 0.03);
  mix-blend-mode: normal;
  border: 1px solid #A9A9A9;
  border-radius: 0px 10px 10px 0px;
`
const Address = styled.div`
  display: flex;
  padding: 8px;

  box-sizing: border-box;

  position: absolute;
  width: 450px;
  height: 34px;
  left: 100px;

  background: rgba(245, 245, 245, 0.03);
  mix-blend-mode: normal;
  border: 1px solid #A9A9A9;
  border-radius: 10px;
`

const Route = styled.div`
  position: absolute;
  left: 31px;
  bottom: 7px;
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
  background: white;
  border-left: 2px solid #A9A9A9;
  border-right: 2px solid #A9A9A9;
  border-bottom: 2px solid #A9A9A9;
  grid-area: sidebar;
  padding: 0.5rem;
`

const Menu = styled.div`
  display: flex;
  padding-left: 15px;
`

const MenuTitle = styled.div`
  font-size: 1.1rem;
  margin-left: 10px;
  padding-bottom: 5px;
`

// Content
const Content = styled.div`
  //display: flex;
  background: white;
  border-right: 2px solid #A9A9A9;
  border-bottom: 2px solid #A9A9A9;
  grid-area: content;
  padding: 0.25rem;
`


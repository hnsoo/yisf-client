import React, {useState} from 'react';
import styled from "styled-components";
import Draggable from "react-draggable";
import {FiStopCircle, FiXCircle, FiHome} from 'react-icons/fi';
import {FaAngleLeft, FaAngleRight, FaHandshake} from 'react-icons/fa';
import {RiUser3Fill} from 'react-icons/ri';
import {BsBarChartFill, BsMegaphoneFill} from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';
// import './Folder.css'

export default function Folder(){
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState(500)

    const handleModal = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <button onClick={handleModal}>
                Click me!
            </button>
            <Draggable handle={Header}>
                    <Container Show={isOpen ? "grid" : "none"} ContainerHeight={height + "px"}
                               ContainerWidth={width + "px"}>
                        <TopLine LineWidth={width + "px"}/>
                        <BottomLine LineWidth={width + "px"}/>
                        <LeftLine LineHeight={height + "px"}/>
                        <RightLine LineHeight={height + "px"}/>
                        <Header>
                            <Back><FaAngleLeft/></Back>
                            <Front><FaAngleRight/></Front>
                            <Address><FiHome/></Address>
                            <Ctrl>
                                <FiStopCircle size="30" color="#4f4f4f"/>
                                <FiXCircle size="30" color="#4f4f4f"/>
                            </Ctrl>
                        </Header>
                        <SideBar>
                            <Menu><RiUser3Fill size="25" color="#4f4f4f"/><MenuTitle>MyPage</MenuTitle></Menu>
                            <Menu><BsBarChartFill size="25" color="#4f4f4f"/><MenuTitle>Ranking</MenuTitle></Menu>
                            <Menu><SiDiscord size="25" color="#4f4f4f"/><MenuTitle>Discord</MenuTitle></Menu>
                            <Menu><BsMegaphoneFill size="25" color="#4f4f4f"/><MenuTitle>Notice</MenuTitle></Menu>
                            <Menu><FaHandshake size="25" color="#4f4f4f"/><MenuTitle>Sponsor</MenuTitle></Menu>
                        </SideBar>
                        <Content></Content>
                    </Container>
            </Draggable>
        </>
    );
}

// Container
const Container = styled.div`
  display: ${(props) => props.Show};
  height: ${(props) => props.ContainerHeight};
  width: ${(props) => props.ContainerWidth};
  grid-template-rows: 50px 1fr;
  grid-template-columns: 150px 1fr;
  grid-template-areas: 
      "header header"
      "sidebar content";
  text-align: center;
`
const TopLine = styled.div`
  top: 0;
  width: ${(props) => props.LineWidth};
  height: 3px;
  background-color: palevioletred;
  position: absolute;
  :hover {
    cursor: n-resize;
  };
  :active {
    background-color: blue;
  };
`
const BottomLine = styled.div`
  bottom: 0;
  width: ${(props) => props.LineWidth};
  height: 3px;
  background-color: palevioletred;
  position: absolute;
  :hover {
    cursor: s-resize;
  };
`
const LeftLine = styled.div`
  left: 0;
  width: 3px;
  height: ${(props) => props.LineHeight};
  background-color: palevioletred;
  position: absolute;
  :hover {
    cursor: w-resize;
  };
`
const RightLine = styled.div`
  right: 0;
  width: 3px;
  height: ${(props) => props.LineHeight};
  background-color: palevioletred;
  position: absolute;
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
  background: white;
  border-right: 2px solid #A9A9A9;
  border-bottom: 2px solid #A9A9A9;
  grid-area: content;
  padding: 0.25rem;
`



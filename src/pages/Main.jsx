import React, {useState} from "react";
import styled from "styled-components";
import WallPaper from '../assets/img/wallPaper.jpg';
import Dock from "../components/Dock";
import TopBar from "../components/TopBar";
import IconFolder from "../assets/img/folder.png"

export default function Main() {
    return (
        <Background>
            <Header><TopBar/></Header>
            <SideBar><Dock/></SideBar>
            <Content>
                <FolderContainer><img src={IconFolder} height="100px" width="100px"/>Reversing</FolderContainer>
                <FolderContainer><img src={IconFolder} height="100px" width="100px"/>Forensic</FolderContainer>
                <FolderContainer><img src={IconFolder} height="100px" width="100px"/>Web</FolderContainer>
                <FolderContainer><img src={IconFolder} height="100px" width="100px"/>Pwnable</FolderContainer>
                <FolderContainer><img src={IconFolder} height="100px" width="100px"/>Misc</FolderContainer>
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
  grid-area: content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-left: 25px;
`
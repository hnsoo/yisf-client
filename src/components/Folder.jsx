import React, {useState} from 'react';
import styled from "styled-components";
import Draggable from "react-draggable";
import {Resizable} from 'react-resizable';
import {ResizableBox} from 'react-resizable';
import './Folder.css';
// import {FiStopCircle, FiXCircle, FiHome} from 'react-icons/Fi';
// import {FaAngleLeft, FaAngleRight} from 'react-icons/Fi';

export default function Folder(){
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState(500)

    const handleModal = () => {
        setIsOpen(!isOpen)
    };

    const onFirstBoxResize = (e, {element, size, handle}) => {
        setWidth(size.width)
        setHeight(size.height)
    }

    return (
        // <Resizable className="box" height={height} width={width} onResize={onFirstBoxResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
        //     <div style={{width: width + 'px', height: height + 'px'}}>
        //         <span className="text">{"Raw use of <Resizable> element. 200x200, all Resize Handles."}</span>
        //         <button>Reset this element's width/height</button>
        //     </div>
        // </Resizable>
        <>
            <button onClick={handleModal}>
                Click me!
            </button>
            <Draggable handle={Header}>
                <Resizable className="box" height={height} width={width} onResize={onFirstBoxResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                    <Container Show={isOpen ? "grid" : "none"} ContainerHeight={height + "px"} ContainerWidth={width + "px"}>
                        <Header>Header</Header>
                        <SideBar>SideBar</SideBar>
                        <Content>Content</Content>
                    </Container>
                </Resizable>
            </Draggable>
        </>
    );
}

const Container = styled.div`
  display: ${(props) => props.Show};
  height: ${(props) => props.ContainerHeight};
  width: ${(props) => props.ContainerWidth};
  grid-template-rows: 35px 1fr;
  grid-template-columns: 200px 1fr;
  grid-template-areas: 
      "header header"
      "sidebar content";
  text-align: center;
`
const Header = styled.div`
  background: #dbdbdb;
  grid-area: header;
  padding: 0.25rem;
`
const SideBar = styled.div`
  background: #e6e6e6;
  grid-area: sidebar;
  padding: 0.25rem;
`
const Content = styled.div`
  background: #f6f6f6;
  grid-area: content;
  padding: 0.25rem;
`



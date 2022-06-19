import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Draggable from "react-draggable";
import {FiStopCircle, FiXCircle, FiHome} from 'react-icons/fi';
import {useDispatch} from "react-redux";
import {closeTerminal} from "../redux/ations/terminal";

export default function Terminal(){
    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState(500)
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [isMove, setIsMove] = useState(false)
    const [divX, setDivX] = useState(0)
    const [divY, setDivY] = useState(0)

    const dispatch = useDispatch();

    const clickClose = () => {
        dispatch(closeTerminal())
    }

    const dragStart = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    const dragEnd = (direction, e) => {
        let MIN_WIDTH = 650
        let MIN_HEIGHT = 450
        const resizeTop = () => {
            if(height + (mouseY - e.clientY) < MIN_HEIGHT){
                setDivY(divY - (MIN_HEIGHT - height));
                setHeight(MIN_HEIGHT);
            }
            else{
                setHeight(height + (mouseY - e.clientY))
                setDivY(divY - (mouseY - e.clientY));
            }
        }
        const resizeBottom = () => {
            if(height - (mouseY - e.clientY) < MIN_HEIGHT){
                setHeight(MIN_HEIGHT)
            }
            else {
                setHeight(height - (mouseY - e.clientY));
            }
        }
        const resizeLeft = () => {
            if(width + (mouseX - e.clientX) < MIN_WIDTH){
                setDivX(divX - (MIN_WIDTH - width));
                setWidth(MIN_WIDTH);
            }
            else{
                setWidth(width + (mouseX - e.clientX));
                setDivX(divX - (mouseX - e.clientX))
            }
        }
        const resizeRight = () => {
            if(width - (mouseX - e.clientX) < MIN_WIDTH){
                setWidth(MIN_WIDTH)
            }
            else {
                setWidth(width - (mouseX - e.clientX));
            }
        }
        switch (direction) {
            case "n":
                resizeTop();
                break;
            case "s":
                resizeBottom();
                break;
            case "w":
                resizeLeft();
                break;
            case "e":
                resizeRight();
                break;
            case "nw":
                resizeTop();
                resizeLeft();
                break;
            case "ne":
                resizeTop();
                resizeRight();
                break;
            case "sw":
                resizeBottom();
                resizeLeft();
                break;
            case "se":
                resizeBottom();
                resizeRight();
                break;
            default:
        }
        setIsMove(true)
    }

    const move = () => {
        return {x: divX, y:divY}
    }

    return (
        <>
            <Draggable handle={Header} defaultPosition={ isMove ? move() : {x:350, y:100}}>
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
                        <Ctrl>
                            <FiXCircle
                                onClick={clickClose}
                                size="30"
                                color="#D94844"
                            />
                            <FiStopCircle size="30" color="#76756E"/>
                        </Ctrl>
                        <Title>Mike test</Title>
                    </Header>
                    <Content>
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
  grid-template-rows: 50px;
  grid-template-columns: 1fr;
  grid-template-areas: 
      "header"
      "content";
  text-align: center;
`
const resizer = styled.div`
  width: 20px;
  height: 20px;
  background: rgba(0,0,0,0);
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
  background-color: rgba(0,0,0,0);
  position: absolute;
  :active {
    background-color: rgba(0,0,0,0);
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
  display: flex;
  align-items: center;
  background: #44433E;
  grid-area: header;
  padding: 6px;
`

const Title = styled.div`
  color: white;
  padding-left: 15px;
  padding-bottom: 2px;
`

const Ctrl = styled.div`
  padding-top: 4px;
  padding-left: 3px;
`

// Content
const Content = styled.div`
  color: white;
  overflow: auto;
  background: #002B36;
  grid-area: content;
  padding: 0.25rem;
`

import pwnIcon from "../assets/img/gear.png";
import reversingIcon from "../assets/img/fun.png";
import forensicIcon from "../assets/img/binary.png";
import webIcon from "../assets/img/global.png";
import miscIcon from "../assets/img/puzzle.png";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {openTerminal} from "../redux/ations/terminal";
import {selectTerminal} from "../redux/ations/zIndex";
import {useState} from "react";

export default function ProblemIcon({info}) {
    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();
    const terminalZIndex = useSelector(state => state.zIndex.terminalZIndex)
    const fieldIcon = (field) => {
        switch (field) {
            case "Pwnable":
                return <img src={pwnIcon} height="100px"/>
            case "Reversing":
                return <img src={reversingIcon} height="100px"/>
            case "Forensic":
                return <img src={forensicIcon} height="100px"/>
            case "Web":
                return <img src={webIcon} height="100px"/>
            case "Misc":
                return <img src={miscIcon} height="100px"/>
            default:
        }
    }

    const clickProblem = (e) => {
        switch (e.detail) {
            case 1:
                //when click once
                if(!isSelected) setIsSelected(true)
                break;
            case 2:
                //when click double~^^
                dispatch(openTerminal(info))
                if(terminalZIndex < 2){
                    dispatch(selectTerminal())
                }
                break;
            default:
                return;
        }
    };

    return (
        <Container
        onClick={clickProblem}
        background={isSelected}
        >
            {fieldIcon(info.type)}
            <Title>{info.title}</Title>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.background ? "#cce8ff": "white"};
  :hover {
    background: ${(props) => props.background ? "#cce8ff": "#e5f3ff"};
  };
`
const Title = styled.div`
  text-align: center;
  width: 100px;
`

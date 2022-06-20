import pwnIcon from "../assets/img/gear.png";
import reversingIcon from "../assets/img/fun.png";
import forensicIcon from "../assets/img/binary.png";
import webIcon from "../assets/img/global.png";
import miscIcon from "../assets/img/puzzle.png";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {openTerminal} from "../redux/ations/terminal";
import {selectTerminal} from "../redux/ations/zIndex";

export default function ProblemIcon({info}) {
    const dispatch = useDispatch();

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

    const clickProblem = () => {
        console.log(info)
        dispatch(openTerminal(info))
        dispatch(selectTerminal())
    }

    return (
        <Container
        onClick={clickProblem}
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
`
const Title = styled.div`
  text-align: center;
  width: 100px;
`
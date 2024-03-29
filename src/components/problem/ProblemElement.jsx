import pwnIcon from "../../assets/img/problem/gear.png";
import solvedPwnIcon from "../../assets/img/problem/gear-solved.png"
import reversingIcon from "../../assets/img/problem/leaf.png";
import solvedReversingIcon from "../../assets/img/problem/leaf-solved.png"
import forensicIcon from "../../assets/img/problem/disc.png";
import solvedForensicIcon from "../../assets/img/problem/disc-solved.png"
import webIcon from "../../assets/img/problem/global.png";
import solvedWebIcon from "../../assets/img/problem/global-solved.png"
import miscIcon from "../../assets/img/problem/light.png";
import solvedMiscIcon from "../../assets/img/problem/light-solved.png"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {openProblemModal} from "../../redux/actions/problem";
import {selectProblemModal} from "../../redux/actions/zIndex";

export default function ProblemElement({info, isSelected, handleClick, elementIndex}) {
    const dispatch = useDispatch();
    const problemModalZIndex = useSelector(state => state.zIndex.problemModalZIndex)
    const solvedPwnable = useSelector(state => state.account.pwnable)
    const solvedWeb = useSelector(state => state.account.web)
    const solvedForensic = useSelector(state => state.account.forensic)
    const solvedReversing = useSelector(state => state.account.reversing)
    const solvedMisc = useSelector(state => state.account.misc)

    const fieldIcon = (field) => {
        switch (field) {
            case "Pwnable":
                for(let problem of solvedPwnable){
                    if(problem.id === info.id) return <img src={solvedPwnIcon} />
                }
                return <img src={pwnIcon} />
            case "Reversing":
                for(let problem of solvedReversing){
                    if(problem.id === info.id) return <img src={solvedReversingIcon} />
                }
                return <img src={reversingIcon} />
            case "Forensic":
                for(let problem of solvedForensic){
                    if(problem.id === info.id) return <img src={solvedForensicIcon} />
                }
                return <img src={forensicIcon} />
            case "Web":
                for(let problem of solvedWeb){
                    if(problem.id === info.id) return <img src={solvedWebIcon} />
                }
                return <img src={webIcon} />
            case "Misc":
                for(let problem of solvedMisc){
                    if(problem.id === info.id) return <img src={solvedMiscIcon} />
                }
                return <img src={miscIcon} />
            default:
        }
    }

    const clickProblem = (e) => {
        switch (e.detail) {
            case 1:
                //when click once
                if(!isSelected) handleClick(elementIndex)
                break;
            case 2:
                //when click double~^^
                dispatch(openProblemModal(info))
                if(problemModalZIndex < 3){
                    dispatch(selectProblemModal())
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
  margin-top: 5px;
  width: 100px;
`

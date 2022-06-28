import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {closeTerminal} from "../redux/actions/terminal";
import ProblemService from "../service/problem"
import {Rnd} from 'react-rnd';
import {selectTerminal} from "../redux/actions/zIndex";
import close from "../assets/img/terClose.png"
import closeHover from "../assets/img/terCloseHover.png";
import closeClick from "../assets/img/terCloseDown.png";

export default function Terminal(){
    const [over, setOver] = useState(0);    // close btn mouse over
    const [flagRes, setFlagRes] = useState("")
    const [flag, setFlag] = useState("")
    const onChangeFlag = (e) => {
        setFlag(e.target.value);
    };

    const terminalZIndex = useSelector(state => state.zIndex.terminalZIndex)
    const info = useSelector(state => state.terminal.problem);
    const dispatch = useDispatch();

    const clickClose = () => {
        dispatch(closeTerminal())
    }

    const item = (type, content) => {
        if(type === "Description"){
            return (<p>
                <Tag>&lt;{type}&gt;</Tag>
                <br/>{content}<br/>
                <Tag>&lt;/{type}&gt;</Tag>
            </p>)
        }
        return (<p>
            <Tag>&lt;{type}&gt;</Tag>
            {content}
            <Tag>&lt;/{type}&gt;</Tag>
        </p>)
    }

    const handleOnKeyPress = (e) => {
        if(e.key === "Enter"){
            ProblemService.sendFlag(info.id, flag)
                .then(()=> {
                    console.log('success!')
                    setFlagRes("Flag 인증에 성공했습니다.")
                })
                .catch((err)=> {
                    if (err.message === "INCORRECT_FLAG") setFlagRes("Flag가 일치 하지 않습니다.");
                    else if(err.message === "ALREADY_CORRECT") setFlagRes("이미 맞춘 문제입니다.");
                    else setFlagRes("관리자는 문제를 맞출 수 없습니다.");
                })
            setFlag("")
        }
    }

    const clickTerminal = () => {
        if (terminalZIndex < 2) {
            dispatch(selectTerminal())
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
            onMouseDown={clickTerminal}
            default={{
                x: 400,
                y: 150,
                width: 750,
                height: 450,
            }}
            style={{
                "zIndex": terminalZIndex,
                "display":"grid",
                "position": "absolute",
                "grid-template-areas":
                `
                     "header    header"
                     "content   content"
                     "content   content"
                     "mark      input"
                     `,
                "text-align": "center",
                "grid-template-columns": "1fr",
                "grid-template-rows": "50px",
                "background": "#002B36"
            }}

            maxHeight={'80%'}
            maxWidth={'80%'}
            minHeight={250}
            minWidth={450}
            bounds="window"
        >
            <Header className="header">
                <Title>{"[" + info.type + "] "}{info.title}</Title>
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
                    {/*<FiStopCircle size="30" color="#76756E"/>*/}
                </Ctrl>
            </Header>
            <Content>
                {item("Title", info.title)}
                {item("Description", info.description)}
                {item("Creator", info.writer)}
                {item("Score", info.calculatedScore)}
                {item("Solved", info.solve)}
                {flagRes}
                <Input>
                    <Mark>&gt;&gt;</Mark>
                    <Flag
                        placeholder="YISF{FLAG}"
                        value={flag}
                        type="text"
                        onChange={onChangeFlag}
                        onKeyPress={handleOnKeyPress}
                    />
                </Input>
            </Content>
        </Rnd>
    );
}
// Header
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding-right: 5px;
`

// Content
const Content = styled.div`
  text-align: left;
  color: #e7faff;
  overflow: auto;
  grid-area: content;
  padding: 0.4rem;
`
const Tag = styled.span`
  color: #4adaff
`
const Input = styled.div`
  display: grid;
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  width: 97%;
  grid-template-columns: 25px 1fr;
  grid-template-rows: 25px;
  grid-template-areas: "mark flag";
`
const Mark = styled.div`
  grid-area: mark;
  color: #e7faff;
`
const Flag = styled.input.attrs(() => ({
    spellCheck: "false",
    autoComplete: "off",
}))`
  grid-area: flag;
  background: rgba(0,0,0,0);
  color: #e7faff;
  border: none;
  :focus {
    outline: none;
  };
`


import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {closeProblemModal} from "../../redux/actions/problem";
import ProblemService from "../../service/problem"
import {Rnd} from 'react-rnd';
import {deselectProblemModal, selectProblemModal} from "../../redux/actions/zIndex";
import close from "../../assets/img/close/web-close.png"
import closeHover from "../../assets/img/close/web-close-hover.png";
import closeClick from "../../assets/img/close/web-close-down.png";
import {logout} from "../../redux/actions/auth";
import AuthService from "../../service/auth";
import {AiOutlineLink} from "react-icons/ai"
import {RiFlag2Fill} from "react-icons/ri"

export default function ProblemModal(){
    const [over, setOver] = useState(0);    // close btn mouse over
    const [flag, setFlag] = useState("")
    const onChangeFlag = (e) => {
        setFlag(e.target.value);
    };

    const problemModalZIndex = useSelector(state => state.zIndex.problemModalZIndex);
    const info = useSelector(state => state.problem.problem);
    const dispatch = useDispatch();

    const clickClose = () => {
        dispatch(closeProblemModal())
        dispatch(deselectProblemModal())
    }

    const handleOnKeyPress = (e) => {
        if(e.key === "Enter"){
            sendFlag()
            setFlag("")
        }
    }

    const sendFlag = () => {
        if(flag === "") {
            alert("Flag를 입력해주세요.")
        }
        else {
            ProblemService.sendFlag(info.id, flag)
                .then(()=> {
                    console.log('success!')
                    alert('Flag 인증에 성공했습니다.')
                })
                .catch((err)=> {
                    if (err.message === "INCORRECT_FLAG") alert("Flag가 일치 하지 않습니다.");
                    else if(err.message === "ALREADY_CORRECT") alert("이미 맞춘 문제입니다.");
                    else if(err.message === "ONLY_ACCESS_USER") alert("관리자는 문제를 맞출 수 없습니다.");
                    else {
                        // 세션 관련 에러
                        dispatch(logout())
                        AuthService.logout()
                    }
                })
        }
    }

    const clickProblemModal = () => {
        if (problemModalZIndex < 3) {
            dispatch(selectProblemModal())
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
            onMouseDown={clickProblemModal}
            default={{
                x: 400,
                y: 150,
                width: 750,
                height: 450,
            }}
            style={{
                "zIndex": problemModalZIndex,
                "display":"grid",
                "position": "absolute",
                "gridTemplateAreas":
                `
                     "header"
                     "address"
                     "content"
                 `,
                "textAlign": "center",
                "gridTemplateColumns": "1fr",
                "gridTemplateRows": "50px 40px 1fr",
                "background": "#fafafa",
                "boxShadow": "0 3px 6px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)"
            }}

            maxHeight={'80%'}
            maxWidth={'80%'}
            minHeight={250}
            minWidth={450}
            bounds="window"
        >
            <Header className="header">
                <Name>{info.title}</Name>
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
            <Address>
                <AddressBox>
                    <AiOutlineLink style={{marginRight: "7px"}}/>
                    {`${info.type.toLowerCase()} > ${info.title}`}
                </AddressBox>
            </Address>
            <Content>
                <Top>
                    <Title>{info.title}</Title>
                    <Gray>writer </Gray>
                    <Black>{info.author}</Black>
                    <Gray> | </Gray>
                    <Gray>score </Gray>
                    <Black>{info.calculatedScore}</Black>
                    <Gray> | </Gray>
                    <Gray>solved </Gray>
                    <Black>0</Black>
                </Top>
                <Description>
                    <Title>Description</Title>
                    <DescContent>
                        <div dangerouslySetInnerHTML={{__html: info.description}}/>
                    </DescContent>
                </Description>
                <Flag>
                    <RiFlag2Fill size="30" color="#AC3652"/>
                    <Title style={{"marginLeft": "10px"}}>FLAG</Title>
                    <InputFlag
                        value={flag}
                        onChange={onChangeFlag}
                        onKeyPress={handleOnKeyPress}
                        placeholder="YISF{FLAG}"
                        spellCheck="false"
                        autoComplete="off"
                    ></InputFlag>
                    <SubmitFlag
                        onClick={sendFlag}
                    >Submit
                    </SubmitFlag>
                </Flag>
            </Content>
        </Rnd>
    );
}
// Header
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #302F2F;
  grid-area: header;
  padding: 6px;
`
const Name = styled.div`
  color: white;
  font-size: large;
  padding-left: 15px;
  padding-bottom: 2px;
`

const Ctrl = styled.div`
  padding-top: 4px;
  padding-left: 3px;
  padding-right: 5px;
`

const Address = styled.div`
  grid-area: address;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #d1d1d1;
`
const AddressBox = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  width: 95%;
  height: 70%;
  text-align: left;
  padding-left: 10px;
`
// Content
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: auto;
  grid-area: content;
  padding: 0.5rem;
`
const Title = styled.div`
  font-size: large;
  color: #AC3652;
`
const Top = styled.div`
  margin: 10px;
`
const Gray = styled.span`
  color: #7c7c7d;
`
const Black = styled.span`
  color: black;
`
const Description = styled.div`
  margin: 10px;
`
const DescContent = styled.div`
  border-radius: 10px;
  background: #E0E0E1;
  margin-top: 10px;
  padding: 15px;
`
const Flag = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
`
const InputFlag = styled.input`
  border: none;
  border-radius: 50px;
  background: #E0E0E1;
  outline-color: #FE6B8B;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  margin-left: 15px;
  margin-right: 15px;
`
const SubmitFlag = styled.button`
  border: none;
  border-radius: 50px;
  background: #AC3652;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
`
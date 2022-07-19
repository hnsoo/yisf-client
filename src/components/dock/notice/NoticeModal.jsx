import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Rnd} from 'react-rnd';
import close from "../../../assets/img/close/web-close.png"
import closeHover from "../../../assets/img/close/web-close-hover.png";
import closeClick from "../../../assets/img/close/web-close-down.png";
import {AiOutlineLink} from "react-icons/ai"
import {closeNoticeModal} from "../../../redux/actions/notice";
import moment from "moment";
import {deselectNoticeModal, selectNoticeModal} from "../../../redux/actions/zIndex";

export default function NoticeModal(){
    const [over, setOver] = useState(0);    // close btn mouse over
    const noticeModalZIndex = useSelector(state => state.zIndex.noticeModalZIndex)
    const info = useSelector(state => state.notice.notice);
    const dispatch = useDispatch();

    const clickNoticeModal = () => {
        if (noticeModalZIndex < 3) {
            dispatch(selectNoticeModal())
        }
    }

    const clickClose = () => {
        dispatch(closeNoticeModal())
        dispatch(deselectNoticeModal())
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
            onMouseDown={clickNoticeModal}
            dragHandleClassName={"header"}
            default={{
                x: 400,
                y: 150,
                width: 750,
                height: 450,
            }}
            style={{
                "display":"grid",
                "position": "absolute",
                "zIndex": noticeModalZIndex,
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
                    {`notice > ${info.title}`}
                </AddressBox>
            </Address>
            <Content>
                <Top>
                    <Title>{info.title}</Title>
                    <Gray>작성시간 </Gray>
                    <Black>{moment(info.createTime).format("MM/DD HH:mm")}</Black>
                    <Gray> | </Gray>
                    <Gray>수정시간 </Gray>
                    <Black>{moment(info.updateTime).format("MM/DD HH:mm")}</Black>
                </Top>
                <Description>
                    <DescContent>
                        <div dangerouslySetInnerHTML={{__html: info.content}}/>
                    </DescContent>
                </Description>
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
  font-size: 0.9rem;
  color: #7c7c7d;
`
const Black = styled.span`
  font-size: 0.9rem;
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
import styled from "styled-components";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {openNoticeModal} from "../../../redux/actions/notice";
import {selectNoticeModal} from "../../../redux/actions/zIndex";

export default function NoticeElement({elementIndex, info}) {
    const dispatch = useDispatch()
    const noticeModalZIndex = useSelector(state => state.zIndex.noticeModalZIndex)

    const clickNoticeElement = () => {
        dispatch(openNoticeModal(info))
        if(noticeModalZIndex < 3){
            dispatch(selectNoticeModal())
        }
    }

    return (
        <Row
            onClick={clickNoticeElement}
        >
            <Col>{elementIndex + 1}</Col>
            <Col>{info.title}</Col>
            <Col>{moment(info.createTime).format("MM/DD HH:mm")}</Col>
            <Col>{moment(info.updateTime).format("MM/DD HH:mm")}</Col>
        </Row>
    )
}
const Row = styled.tr`
  border-bottom: 1px solid lightgray;
  :hover {
    cursor: pointer;
    background: ghostwhite;
  };
`
const Col = styled.td`
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
`
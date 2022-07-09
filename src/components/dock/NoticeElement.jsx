import styled from "styled-components";
import moment from "moment";
import {useDispatch} from "react-redux";
import {openNoticeModal} from "../../redux/actions/notice";

export default function NoticeElement({elementIndex, info}) {
    const dispatch = useDispatch()

    const clickNoticeElement = () => {
        dispatch(openNoticeModal(info))
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
  // background: ${(props) => props.background ? "#cce8ff": "white"};
  // :hover {
  //   background: ${(props) => props.background ? "#cce8ff": "#e5f3ff"};
  // };
`
const Col = styled.td`
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
`
import styled from "styled-components";
import moment from "moment";

export default function NoticeElement({elementIndex, info}) {


    return (
        <Row
            // onClick={clickProblem}
            // background={isSelected}
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
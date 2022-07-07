import React from 'react';
import styled from "styled-components";
import {useEffect} from "react";
import NoticeService from "../../service/notice";
import {useState} from "react";
import NoticeElement from "./NoticeElement";
import "react-table";

export default function Notice() {
    const [noticeData, setNoticeData] = useState([]);

    useEffect(() => {
        NoticeService.getNotice()
            .then(
                (data) => {
                    setNoticeData(data)
                    return data
                }
            )
    }, [])

    return (
        <Container>
            <b>YISF 공지사항</b><br/>
            <Table>
                <Th>번호</Th>
                <Th>제목</Th>
                <Th>작성시간</Th>
                <Th>수정시간</Th>
                {noticeData && noticeData.map((notice, idx) =>
                    <NoticeElement
                        key={notice.id}
                        elementIndex={idx}
                        info={notice}
                        // isSelected={isIconSelected[idx]}
                        // handleClick={handleClick}
                    />
                )}
            </Table>

        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 1rem;
`
const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  line-height: 1.5;  
  margin-top: 20px;
`
const Th = styled.th`
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-top: 2px solid #036;
  border-bottom: 1px solid lightgray;
  background: #f9f9f9;
`
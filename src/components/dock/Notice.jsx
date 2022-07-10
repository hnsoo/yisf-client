import React from 'react';
import styled from "styled-components";
import {useEffect} from "react";
import NoticeService from "../../service/notice";
import {useState} from "react";
import NoticeElement from "./NoticeElement";
import "react-table";
import {logout} from "../../redux/actions/auth";
import AuthService from "../../service/auth";
import {getProblems} from "../../redux/actions/terminal";
import {useDispatch, useSelector} from "react-redux";
import {getNotices} from "../../redux/actions/notice";

export default function Notice() {
    const notices = useSelector(state => state.notice.notices)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotices())
            .then()
            .catch((err) => {
                // 세션 관련 에러
                dispatch(logout)
                AuthService.logout()
            })
    }, [dispatch])

    return (
        <Container>
            <b>YISF 공지사항</b><br/>
            <Table>
                <Th>번호</Th>
                <Th>제목</Th>
                <Th>작성시간</Th>
                <Th>수정시간</Th>
                {notices && notices.map((notice, idx) =>
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
  padding: 0.5rem;
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
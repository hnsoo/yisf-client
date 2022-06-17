import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UserService from "../../service/user";

export default function Mypage(){
    const [info, setInfo] = useState({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        score: 0,
    })

    useEffect(() => {
        UserService.loadMyInfo()
            .then(
                (data) => setInfo((prevState) => {
                    return { ...prevState,
                        id: data.id,
                        username: data.username,
                        nickname: data.nickname,
                        email: data.email,
                        score: data.score,
                    }
                })
            )
    }, [])

    return (
        <Container>
            <b>User name</b><br/>
            {info.username}<br/><br/>
            <b>E-mail</b><br/>
            {info.email}<br/><br/>
            <b>My score</b><br/>
            {info.score}<br/><br/>
            <b>My solved</b><br/>

        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`


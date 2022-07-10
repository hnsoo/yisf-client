import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UserService from "../../service/user";
import {logout} from "../../redux/actions/auth";
import AuthService from "../../service/auth";
import {useDispatch} from "react-redux";

export default function Mypage(){
    const dispatch = useDispatch()
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
                (data) => {
                    // const solved = getSolved(data.solved)
                    // console.log(solved.Web)
                    setInfo((prevState) => {
                        return {
                            ...prevState,
                            id: data.id,
                            username: data.username,
                            nickname: data.nickname,
                            email: data.email,
                            score: data.score,
                            // reversing: solved.Reversing,
                            // forensic: solved.Forensic,
                            // web: solved.Web,
                            // pwnable: solved.Pwnable,
                            // misc: solved.Misc,
                        }
                    })
                }
            )
            .catch(
                err => {
                    // 세션 관련 에러
                    console.log(err)
                    // dispatch(logout())
                    // AuthService.logout()
                }
            )
    }, [])

    // const getSolved = (data) => {
    //     const solved = {
    //         Reversing: [],
    //         Forensic: [],
    //         Web: [],
    //         Pwnable: [],
    //         Misc: [],
    //     }
    //     data.map(item => {
    //         if(item.type !== "Crypto") solved[item.type].push(item.title)
    //     })
    //     return solved
    // }

    return (
        <Container>
            <b>User name</b><br/>
            {info.username}<br/><br/>
            <b>E-mail</b><br/>
            {info.email}<br/><br/>
            <b>My score</b><br/>
            {info.score}<br/><br/>
            <b>My solved</b><br/>
            {/*Reversing<br/>*/}
            {/*/!*{info.reversing.join(", ")}<br/><br/>*!/*/}
            {/*Forensic<br/>*/}
            {/*/!*{info.forensic.join(", ")}<br/><br/>*!/*/}
            {/*Web<br/>*/}
            {/*/!*{info.web.join(", ")}<br/><br/>*!/*/}
            {/*Pwnable<br/>*/}
            {/*/!*{info.pwnable.join(", ")}<br/><br/>*!/*/}
            {/*Misc<br/>*/}
            {/*/!*{info.misc.join(", ")}<br/><br/>*!/*/}
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.5rem;
`


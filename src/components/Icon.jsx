import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {openNotice, openMypage} from "../redux/ations/folder";

export default function Icon({role, color, img}){
    const dispatch = useDispatch()

    const setView = (role) => {
        switch (role) {
            case 'notice':
                dispatch(openNotice())
                break;
            case 'mypage':
                dispatch(openMypage())
                break;
            default:
        }
    }

    return (
        <Container
            onClick={()=>{setView(role)}}
            BackgroundColor={color}
        >
            {img}
        </Container>
    );
}

const Container = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.BackgroundColor};
  max-width: 100%;
  width: 80%;
  height: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  };
`
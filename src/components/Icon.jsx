import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {openNotice, openMypage, openRank, openSponsor} from "../redux/ations/folder";
import {selectFolder} from "../redux/ations/zIndex";

export default function Icon({role, color, img}){
    const dispatch = useDispatch()
    const folderZInder = useSelector(state => state.zIndex.folderZIndex)

    const setView = (role) => {
        switch (role) {
            case 'notice':
                dispatch(openNotice())
                break;
            case 'mypage':
                dispatch(openMypage())
                break;
            case 'rank':
                dispatch(openRank())
                break;
            case 'sponsor':
                dispatch(openSponsor())
                break;
            default:
        }
    }

    const clickIcon = () => {
        setView(role)
        if(folderZInder < 2){
            dispatch(selectFolder())
        }
    }

    return (
        <Container
            onClick={clickIcon}
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
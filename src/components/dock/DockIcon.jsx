import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {openNotice, openMypage, openRank, openSponsor} from "../../redux/actions/folder";
import {selectFolder} from "../../redux/actions/zIndex";

export default function DockIcon({role, color, img}){
    const dispatch = useDispatch()
    const folderZIndex = useSelector(state => state.zIndex.folderZIndex)

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
            case 'discord':
                window.open('https://discord.gg/RMMuuq29', '_blank')
                break;
            default:
        }
    }

    const clickIcon = () => {
        setView(role)
        if(folderZIndex < 3){
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
  //max-width: 100%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  };
`
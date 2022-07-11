import React from 'react';
import styled from "styled-components";
import DockIcon from "./DockIcon";
import {FaHandshake} from 'react-icons/fa';
import {RiUser3Fill} from 'react-icons/ri';
import {BsBarChartFill, BsMegaphoneFill} from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';

export default function DockBar(){
    return (
      <Container>
        <DockIcon
            role={"mypage"}
            color={"#37AB45"}
            img={<RiUser3Fill size= "70px" color="white"/>}
        />
        <DockIcon
            role={"rank"}
            color={"#A7AC36"}
            img={<BsBarChartFill size= "70px" color="white"/>}
        />
        <DockIcon
            color={"#3684AC"}
            img={<SiDiscord size= "70px" color="white"/>}
        />
        <DockIcon
            role={"notice"}
            color={"#AC3652"}
            img={<BsMegaphoneFill size= "70px" color="white" />}
        />
        <DockIcon
            role={"sponsor"}
            color={"#AC7636"}
            img={<FaHandshake size= "70px" color="white"/>}
        />
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(54, 9, 45, 0.5);
`
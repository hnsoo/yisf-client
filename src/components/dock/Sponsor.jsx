import React from 'react';
import styled from "styled-components";
import schIcon from '../../assets/img/sponsor/sch.jpg'
import moisIcon from '../../assets/img/sponsor/mois.jpg'
import msitIcon from '../../assets/img/sponsor/msit.jpg'
import kisaIcon from '../../assets/img/sponsor/kisa.png'
import newsIcon from '../../assets/img/sponsor/news.png'
import kiiscIcon from '../../assets/img/sponsor/kiisc.png'
import kisiaIcon from '../../assets/img/sponsor/kisia.png'
import ahnlab from '../../assets/img/sponsor/ahnlab.png'
import estIcon from '../../assets/img/sponsor/est.png'
import centerIcon from '../../assets/img/sponsor/center.png'


export default function Sponsor(){
    return (
        <Container>
            <Title>주최</Title>
            <Logo src={schIcon} />
            <Title>주관</Title>
            <Logo src={schIcon} />
            <Logo src={centerIcon} />
            <Title>후원</Title>
            <Logo src={moisIcon} />
            <Logo src={msitIcon} />
            <Logo src={kisaIcon} />
            <Title>미디어 협력</Title>
            <Logo src={newsIcon} />
            <Title>기관 협력</Title>
            <Logo src={kiiscIcon} />
            <Logo src={kisiaIcon} />
            <Logo src={ahnlab} />
            <Logo src={estIcon} />
        </Container>
    );
}

const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`
const Title = styled.p`
  font-family: "NotoBold", sans-serif;
`
const Logo = styled.img`
  margin-right: 15px;
  height: 40px;
`

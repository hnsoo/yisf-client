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
import ktIcon from '../../assets/img/sponsor/kt.png'

export default function Sponsor(){
    return (
        <Container>
            <Title>주 최</Title>
            <Logo src={schIcon} />
            <Line />
            <Title>주 관</Title>
            <Logo src={schIcon} />
            <Logo src={centerIcon} />
            <Line/>
            <Title>후 원</Title>
            <Logo src={moisIcon} />
            <Logo src={msitIcon} />
            <Logo src={kisaIcon} />
            <Line/>
            <Title>미디어 협력</Title>
            <Logo src={newsIcon} />
            <Line/>
            <Title>기관 협력</Title>
            <Logo src={kiiscIcon} />
            <Logo src={kisiaIcon} />
            <Logo src={ahnlab} />
            <Logo src={ktIcon} />
            <Logo src={estIcon} />
        </Container>
    );
}

const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 1rem;
`
const Title = styled.div`
  font-size: large;
  font-family: "NotoBold", sans-serif;
`
const Logo = styled.img`
  margin-top: 5px;
  margin-right: 30px;
  //margin-bottom: 15px;
  height: 40px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #cbcbcb;
  margin-top: 15px;
  margin-bottom: 15px;
`
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


export default function Sponsor(){
    return (
        <Container>
            <b>주최</b><br/>
            <img src={schIcon} /><br/>
            <b>주관</b><br/>
            <img src={schIcon} /><br/>
            <b>후원</b><br/>
            <img src={moisIcon} />
            <img src={msitIcon} />
            <img src={kisaIcon} /><br/>
            <b>미디어 협력</b><br/>
            <img src={newsIcon} /><br/>
            <b>기관 협력</b><br/>
            <img src={kiiscIcon} />
            <img src={kisiaIcon} />
            <img src={ahnlab} />
            <img src={estIcon} /><br/>
        </Container>
    );
}

const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`

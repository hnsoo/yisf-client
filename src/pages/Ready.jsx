import WallPaper from '../assets/img/wallpaper-blur.jpg';
import styled from "styled-components";
import UtilService from "../service/util";
import {useEffect, useState} from "react";

export default function Ready() {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // 서버 시간 로드
        UtilService.getTime()
            .then((data) => {
                let result = UtilService.calculateRemainTime(data.openTime)
                setHours(result.hours)
                setMinutes(result.minutes)
                setSeconds(result.seconds)
            })
    }, [])

    useEffect(() => {
        const countdown = setInterval(() => {
            let result = UtilService.countDown(hours, minutes, seconds)
            if (result.clear)
                clearInterval(countdown)
            setHours(result.hours)
            setMinutes(result.minutes)
            setSeconds(result.seconds)
        }, 1000);
        return () => clearInterval(countdown);
    }, [hours, minutes, seconds]);

    return (
        <Background>
            <Container>
                <Text>
                    대회 시작까지
                </Text>
                <Timer>
                    {`${hours}:${minutes}:${seconds}`}
                </Timer>
            </Container>
        </Background>
    )
}
const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${WallPaper});
  background-size: cover;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Timer = styled.div`
    
`
const Text = styled.div`

`
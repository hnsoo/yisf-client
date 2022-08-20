import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import RankTable from "./RankTable"
import RankService from "../../../service/rank";
import RankChart from "./RankChart";

export default function Rank(){
    const [tableData, setTableData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [topPlayer, setTopPlayer] = useState([]);

    useEffect(() => {
        RankService.getRank("39")
            .then(
                (data) => {
                    setTableData(data)
                    return data
                }
            )
            .then(
                (data) => {
                    const count = "5"
                    RankService.getRankHistory(count)
                        .then(
                            (res) => {
                                // 최상위 count 명 명단 설정
                                let name = []
                                for(let i = 0; i < Number(count); i++){
                                    if (data[i])
                                        name.push(data[i].nickname);
                                }
                                setTopPlayer(name)

                                // 현재 차트 설정
                                let now = new Date()
                                let time = `${now.getHours()}시 ${now.getMinutes()}분`
                                let obj = {time: time}
                                for(let i = 0; i < Number(count); i++){
                                    if (data[i])
                                        obj[data[i].nickname] = data[i].score
                                }
                                res.push(obj)
                                setChartData(res)
                            }
                        )
                }
            )
    }, [])

    const columnData = useMemo(
        () => [
            {
                accessor: 'rank',
                Header: 'Rank',
            },
            {
                accessor: 'nickname',
                Header: 'Nickname',
            },
            {
                accessor: 'score',
                Header: 'Score',
            },
            {
                accessor: 'solved',
                Header: 'Solved count',
            },
            {
                accessor: 'lastSolvedTime',
                Header: 'Last solved time',
            },
        ]
    , []);

    return (
        <Container>
            <Title>실시간 유저 랭킹</Title>
            <RankChart data={chartData} player={topPlayer}/>
            <RankTable columns={columnData} data={tableData}/>
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
  font-family: PretendardBold, sans-serif;
`
